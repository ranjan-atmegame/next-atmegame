"use client";
import Icon from "../ui/images/Icon";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { getUserImage } from "@/utils";
import { authenticate } from "@/api/auth";

export default function HeaderLoginComp({ styles, userInfo }) {
  const router = useRouter();
  const userIconRef = useRef();
  const [auth, setAuth] = useState(userInfo);

  useEffect(() => {
    const { isSignedIn, user, token } = authenticate();

    const profileImage = isSignedIn
      ? getUserImage(user.avtar, user.gender)
      : `https://www.atmegame.com/img/male-user-avatar.svg`;
    setAuth({ isSignedIn, user: { ...user, profileImage }, token });
  }, [auth.isSignedIn]);

  function handleCheckAuth() {
    let URL = auth.isSignedIn ? "/dashboard" : "/signin";
    router.push(URL);
  }

  return (
    <div
      title=""
      className={`${styles.notificationIcon} ${styles.user}`}
      onClick={handleCheckAuth}
      ref={userIconRef}
    >
      {auth.isSignedIn && auth.user?.profileImage ? (
        <Icon
          src={auth?.user.profileImage}
          title="User"
          alt="User"
          height="24"
          width="24"
          priority={false}
        />
      ) : (
        <Icon
          src={`/img/user.svg`}
          title="User"
          alt="User"
          height="24"
          width="24"
          priority={true}
        />
      )}
    </div>
  );
}
