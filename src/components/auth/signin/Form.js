"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Link from "next/link";
import { login, authenticate, saveAuth } from "@/api/auth";
import styles from "./login.module.css";
import GoogleLogin from "./google";

export default function Form() {
  const router = useRouter();
  const [state, setState] = useState({
    isSignedIn: false,
    email: "",
    password: "",
    rememberMe: false,
    error: "",
    loading: false,
  });

  const verifyLogin = () => {
    const auth = authenticate();
    if (auth?.isSignedIn) {
      router.push("/");
    }
  };

  useEffect(() => {
    verifyLogin();
  }, []);

  //   const setLoginError = (loginState) => {
  //     console.log(loginState);
  //     // setState({ ...loginState });
  //   };

  const handleChange = (name) => (event) => {
    setState((prevState) => ({
      ...prevState,
      error: false,
      [name]: event.target.value,
    }));
  };

  const toggleRememberMe = (event) => {
    setState((prevState) => ({
      ...prevState,
      rememberMe: event.target.checked,
    }));
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    setState((prevState) => ({ ...prevState, loading: true, error: false }));

    const { email, password, rememberMe } = state;
    try {
      const response = await login({
        email,
        password,
      });

      if (response.error) {
        return setState((prevState) => ({
          ...prevState,
          loading: false,
          error: response.error,
        }));
      }

      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));

      saveAuth({
        user: response.user,
        token: response.token,
        isSignedIn: response.isSignedIn,
      });

      // router.push("/");
      window.location.href = "/";
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        error: error.message,
        loading: false,
      }));
    }
  };

  return (
    <form>
      <span className={styles.errorMessage}>{state.error}</span>
      <span className={styles.successMessage}></span>
      <h2>Sign in to your Account</h2>
      <span className={styles.errorMessage}></span>
      <div className={styles.field}>
        <input
          className={styles.input}
          type="email"
          name="email"
          onChange={handleChange("email")}
          value={state.email}
          placeholder=" "
          id="username"
        />
        <label className={styles.label} htmlFor="username">
          Email
        </label>
      </div>
      <div className={styles.field}>
        <input
          className={styles.input}
          type="password"
          name="password"
          onChange={handleChange("password")}
          value={state.password}
          placeholder=" "
          id="password"
        />
        <label className={styles.label} htmlFor="password">
          Password
        </label>
      </div>
      {/* <div className={styles.customCheckbox}>
                <input type="checkbox" checked="checked" id="termsonditions" />
                <label className={styles.label} htmlFor="termsonditions">
                    Remember Password
                    <a className={styles.forgotPwd} href="#">Forgot Password?</a>
                </label>
        </div> */}

      <div className={styles.customCheckbox}>
        {/* <input type="checkbox" id="termsConditions" /> */}
        <input
          type="checkbox"
          onChange={toggleRememberMe}
          checked={state.rememberMe}
          id="termsConditions"
        />
        <label htmlFor="termsConditions">Remember Password</label>
        <Link
          prefetch={false}
          className={styles.forgotPwd}
          href="/forgot-password"
        >
          Forgot Password?
        </Link>
      </div>
      <button className={styles.btnBlue} onClick={formSubmit}>
        Sign In
      </button>

      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
        <GoogleLogin />
      </GoogleOAuthProvider>

      <div className={styles.signSignupLink}>
        Don’t have a profile? &nbsp;
        <Link prefetch={false} href="/signup">
          Create New Account
        </Link>
      </div>
    </form>
  );
}
