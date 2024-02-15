import Icon from "../ui/images/Icon";
import Input from "../common/Input";
import Button from "../common/Button";
import { useEffect, useState } from "react";
import { validateForm } from "@/utils/Validation";
import { newsSubscribe } from "@/api/blog";
import styles from "./newsSubscribe.module.css";

export default function NewsSubscribe({
  heading = "Subscribe to Our Newsletter",
  subHeading = "To be updated with all latest news",
  icon = "https://www.atmegame.com/img/newsletter-icon.svg",
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setEmail(value);
    setError();
    setSuccessMsg();
  }

  useEffect(() => {
    window.addEventListener("keyup", submitFormOnEnter);
    return () => {
      window.removeEventListener("keyup", submitFormOnEnter);
    };
  });

  function submitFormOnEnter(event) {
    if (event.key === "Enter") {
      sumbitForm(event);
    }
  }

  async function sumbitForm(e) {
    let validateFld = { email };
    e.preventDefault();
    const errors = validateForm(validateFld);
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      const res = await newsSubscribe(validateFld);
      if (res) {
        setLoading(false);
        setEmail();
        if (res.error) {
          let err = {};
          err["email"] = res.error ? res.error : "";
          setError(err);
        } else {
          setSuccessMsg("Thank You for Subscribing.");
        }
      }
    } else {
      setError(errors);
      setLoading(false);
    }
  }

  return (
    <div className={styles.newsSubscribe}>
      <div className={styles.header}>
        <Icon src={icon} alt="IMAGE" height={30} width={30} />
        <div>
          <h3>{heading}</h3>
          <p>{subHeading}</p>
        </div>
      </div>
      <div>
        <Input
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          title="Email"
          validation={["required", "email"]}
          error={error}
        />
        {successMsg && <div className="success-msg">{successMsg}</div>}
        <Button
          label="Yes, Subscribe Now"
          onClick={sumbitForm}
          loading={loading}
        />
      </div>
    </div>
  );
}
