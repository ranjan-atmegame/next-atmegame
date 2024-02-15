"use client";
import { useState, useEffect } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import RadioButton from "@/components/common/RadioButton";
import { Male } from "@/components/common/SvgIcons/Male";
import { Female } from "@/components/common/SvgIcons/Female";
import { checkExistingUserName } from "../../../api/auth";
import { validateForm, validateRadioBtn } from "@/utils/Validation";
import { useDebounce } from "@/hooks/useDebounce";
import CheckBox from "@/components/common/CheckBox";
import Link from "next/link";
import { signUp } from "@/api/auth";
import { getLocation } from "@/utils/Location";
import styles from "./signup.module.css";
import GoogleLogin from "../signin/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
export default function SignUpForm() {

  const [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    country: "",
    tc: false,
    successMsg: "",
    errorMsg: ""
  });

  const userGender = [
    { label: "Male", id: "male", value: "M" },
    { label: "Female", id: "female", value: "F" },
  ];

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [color, setColors] = useState("");
  const [radioErr, setRadioErr] = useState("");

  const delayedUsrNm = useDebounce(state.userName);

  useEffect(() => {
    if (delayedUsrNm && delayedUsrNm.length > 0)
      verifyExistingUserName(delayedUsrNm);
  }, [delayedUsrNm]);

  async function handleChange(e) {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, successMsg: "", errorMsg: "", [name]: value }));
    setError("");
    setRadioErr("");
  }

  async function verifyExistingUserName(user) {
    const resp = await checkExistingUserName(user);
    const count = resp.count;
    const errors = {};
    errors["userName"] = `${user} ${count > 0 ? "is already exists." : " is valid username."
      }`;
    setError(errors);
    setColors(count > 0 ? "red" : "green");
  }

  function checkPassnConfrmPass() {
    const { password, confirmPassword } = state;
    if (password === confirmPassword) {
      return true;
    }
    return false;
  }

  function handleCheckBox(e) {
    let tc = e.target?.checked;
    setState((prev) => ({ ...prev, tc }));
  }

  const { userName, email, password, confirmPassword, tc, gender, successMsg, errorMsg } = state;

  async function sumbitForm(e) {
    e.preventDefault();
    let validateFld = { userName, email, password, confirmPassword, tc };
    const errors = validateForm(validateFld);
    const radioError = validateRadioBtn("gender");
    //verfiying pass and confirm pass
    const passwordCheck = checkPassnConfrmPass();
    const { countryCode } = await getLocation();

    let params = { userName, email, password, gender, country: countryCode };

    if (Object.keys(errors).length === 0 && radioError == "" && passwordCheck) {
      setLoading(true);
      const resp = await signUp(params);
      if (resp) {
        setLoading(false);
        setState({
          successMsg: resp.res && resp.res.error ? "" : resp.msg,
          errorMsg: resp.res && resp.res.error ? resp.res.error : "",
          tc: false
        });
        setError();
      }
    } else {
      let cfErr = !passwordCheck
        ? (errors["confirmPassword"] = "Password not matched")
        : null;
      let err = { ...errors, ...cfErr };
      setError(err);
      setLoading(false);
      setColors("");
      setRadioErr(radioError);
    }
  }

  return (
    <div>
      {successMsg !== "" && <div className="success-msg">{successMsg}</div>}
      {errorMsg !== "" && <div className="errorMsg">{errorMsg}</div>}
      <form id="singUpForm">
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
                radioCls="tabbularRadioBtn"
                labelCls="tabbularLabel"
                mainCls="tabbularRadioParent"
                checked={gender == item.value ? true : false}
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
          validation={["required", "minLengthThree"]}
          error={error}
          color={color}
        />
        <Input
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          title="Email"
          validation={["required", "email"]}
          error={error}
        />
        <Input
          type="password"
          value={password}
          onChange={handleChange}
          name="password"
          title="Password"
          validation={["required", "minLengthSix"]}
          error={error}
          autocomplete="new-password"
        />
        <Input
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          title="Confirm Password"
          validation={["required", "minLengthSix"]}
          error={error}
          autocomplete="new-password"
        />
        <div className={styles.customCheckbox}>
          <CheckBox onChange={handleCheckBox} name="tc" error={error} id="tc" checked={tc}>
            <>
              Accept
              <Link href="/terms-condition"> Terms &amp; Conditions </Link>
              and
              <Link href="/privacy-policy"> Privacy Policy</Link>
            </>
          </CheckBox>
        </div>
        <Button label="Create Account" onClick={sumbitForm} loading={loading} />
        <GoogleOAuthProvider
          clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        >
          <GoogleLogin />
        </GoogleOAuthProvider>
        <div className={styles.signSignupLink}>
          Already have a profile? &nbsp;
          <Link href="/signin">Sign in</Link>
        </div>
      </form>
    </div>
  );
}
