"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";
import Icon from "@/components/ui/images/Icon";
import { authenticate } from "@/api/auth";
import styles from "../login.module.css";
import { S3_IMAGE_PATH } from "@/utils/Constants";
import { updateUserLogin, generateToken, saveAuth } from "@/api/auth";

export default function GoogleLogin() {
  const router = useRouter();

  useEffect(() => {
    const auth = authenticate();
    if (auth.isSignedIn) {
      return router.push("/");
    }
  }, []);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const authResponse = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
        );
        const authUser = await authResponse.json();
        const token = generateToken(authUser);
        const response = await updateUserLogin(authUser, token);
        saveAuth({
          user: response.user,
          token: response.token,
          isSignedIn: response.isSignedIn,
        });

        // router.push("/");
        window.location.href = "/";
      } catch (error) {
        console.log(error);
      }
    },
    onError: (errorResponse) => { },
  });

  return (
    <div className={styles.signSignupOptions} onClick={googleLogin}>
      <span>&nbsp;</span>
      <Link href="#" className={styles.googleBtn}>
        <Icon
          iconClass={styles.mR10}
          src={`/img/googleLogin.svg`}
          title="Google Login"
          width={32}
          height={32}
          priority={true}
        />
        Google
      </Link>
    </div>
  );
}
