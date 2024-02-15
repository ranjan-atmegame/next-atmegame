import { updateProfile } from "@/api/user";
import { useEffect, useState } from "react";
import styles from "@/components/auth/signup/signup.module.css";
import RadioButton from "@/components/common/RadioButton";
import { Male } from "@/components/common/SvgIcons/Male";
import { Female } from "@/components/common/SvgIcons/Female";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { validateForm, validateRadioBtn } from "@/utils/Validation";
import { authenticate } from "@/api/auth";
import { getItem, setItem } from "@/utils/LS";

export default function EditProfilePage({ games, updateUserNameCB }) {
  const [state, setState] = useState({
    userName: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    successMsg: "",
    authError: false
  });

  useEffect(() => {
    preFilledUserInfo(games);
  }, [games]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [radioErr, setRadioErr] = useState("");

  const userGender = [
    { label: "Male", id: "male", value: "M" },
    { label: "Female", id: "female", value: "F" },
  ];

  function preFilledUserInfo(games) {
    updateUserInLocalStorage(games);
    const { firstName, lastName, gender, userName, email } = games;
    setState((prev) => ({
      ...prev,
      firstName,
      lastName,
      gender,
      userName,
      email,
    }));
  }

  async function handleChange(e) {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
    setError("");
  }

  async function sumbitForm(e) {
    e.preventDefault();
    let gender = state.gender;
    let validateFld = { email, gender, firstName, lastName };
    const errors = validateForm(validateFld);
    const radioError = validateRadioBtn("gender");

    if (Object.keys(errors).length === 0 && radioError == "") {
      setLoading(true);
      const { token } = authenticate();
      const resp = await updateProfile(token, validateFld);

      if (resp.error) {
        setLoading(false);
        setState((prev) => ({ ...prev, successMsg: resp?.error, authError: true }));
      } else {
        setLoading(false);
        if (resp && resp.response && resp.response.user) {
          preFilledUserInfo(resp.response.user);
          updateUserNameCB(resp.response.user);
        }
        setState((prev) => ({ ...prev, successMsg: resp?.msg, authError: false }));
        window.location.href="/dashboard";
      }
    } else {
      setError(errors);
      setLoading(false);
      setRadioErr(radioError);
    }
  }

  function updateUserInLocalStorage(user) {
    let JWT = getItem("JWT") ? getItem("JWT") : {}
    JWT.user = user;
    setItem("JWT", JWT);
  }

  const { userName, email, firstName, lastName, successMsg, gender, authError } = state;
  return (
    games && (
      <>
        <div className={styles.updateProfileWrapper}>
          <div key={games._id} className={styles.cardBody}>
            {successMsg !== "" && (
              <div className="success-msg" style={{ color: authError ? "red" : "" }}>{successMsg}</div>
            )}
            <form>
              <div className={styles.radioWrapper}>
                {userGender &&
                  userGender.map((item) => (
                    <RadioButton
                      key={item.id}
                      value={item.value}
                      name="gender"
                      onChange={handleChange}
                      id={item.id}
                      error={radioErr}
                      checked={item.value == gender}
                      radioCls="tabbularRadioBtn"
                      labelCls="tabbularLabel"
                      mainCls="tabbularRadioParent"
                    >
                      {
                        <>
                          {item.label == "Male" ? <Male /> : <Female />}
                          {item.label}
                        </>
                      }
                    </RadioButton>
                  ))}
              </div>
              <Input
                type="text"
                value={userName}
                onChange={handleChange}
                name="userName"
                title="Username"
                validation=""
                error={error}
                floatLabel={userName !== ""}
                readOnly="readonly"
              />

              <Input
                type="email"
                value={email}
                onChange={handleChange}
                name="email"
                title="Email"
                validation={["required", "email"]}
                error={error}
                floatLabel={email !== ""}
              />

              <Input
                type="text"
                value={firstName}
                onChange={handleChange}
                name="firstName"
                title="FirstName"
                validation={["required", "minLengthThree"]}
                error={error}
                floatLabel={firstName !== ""}
              />

              <Input
                type="text"
                value={lastName}
                onChange={handleChange}
                name="lastName"
                title="LastName"
                validation={["required", "minLengthThree"]}
                error={error}
                floatLabel={lastName !== ""}
              />

              <Button
                label="Update Profile"
                onClick={sumbitForm}
                loading={loading}
              />
            </form>
          </div>
        </div>
      </>
    )
  );
}
