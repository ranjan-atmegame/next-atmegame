"use client";
import { useState, useEffect } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { validateForm } from "@/utils/Validation";
import styles from "./forgotpass.module.css";
// import styles from "./forgotpass.module.css";
import Link from "next/link";
import { forgotPassword } from "@/api/auth";
export default function ForgotPassForm({
  heading = "Forgot Password?",
  desp = "No worries! Enter your email and we will send you a link to reset your password",
  signInText = "< Back to sign in",
}) {
  const [state, setState] = useState({
    email: "",
    emailSentObj: {},
    errorMsg: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleChange(e) {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
    setError("");
  }

  const { email, emailSentObj, errorMsg } = state;

  async function sumbitForm(e) {
    e.preventDefault();
    let validateFld = { email };
    const errors = validateForm(validateFld);

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      const resp = await forgotPassword(validateFld);
      if (resp) {
        let errMsg = resp && resp.message ? resp.message : "";
        setLoading(false);
        setState({ emailSentObj: resp?.data });
        setState({ errorMsg: errMsg });
      }
    } else {
      setError(errors);
      setLoading(false);
    }
  }

  const emailSent = emailSentObj && Object.keys(emailSentObj).length;
  return (
    <div>
      <h3>{emailSent ? "Email Sent" : heading}</h3>
      {!emailSent && <p>{desp}</p>}
      {emailSent ? <p className={styles.successMsg}>{emailSent.msg}</p> : null}
      {errorMsg && <p className={styles.errorMsg}>{errorMsg}</p>}

      {!emailSent && (
        <form id="forgotPassWord">
          <Input
            type="email"
            value={email}
            onChange={handleChange}
            name="email"
            title="Email"
            validation={["required", "email"]}
            error={error}
          />
          <Button
            label="Send Reset Link"
            onClick={sumbitForm}
            loading={loading}
          />
        </form>
      )}
      <Link prefetch={false} className={styles.space} href={`/signin`}>
        {signInText}
      </Link>
    </div>
  );
}
