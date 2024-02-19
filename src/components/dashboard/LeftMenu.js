"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import profile from "./profile/profile.module.css";
import MiniShimmer from "../ui/shimmer/MiniShimmer";
import { getUserImage } from "@/utils";
import { authenticate, removeAuth } from "@/api/auth";
import { SIDEBAR_LINK } from "@/utils/Constants";
import { removeItem } from "@/utils/LS";
import { IS_GAME_PLAYED, GAME_PLAYED_COUNT } from "@/utils/Constants";
import menuStyles from "./profile/menu.module.css";
import { useEffect, useState } from "react";

export default function LeftMenu({ leftStyle, auth, updatedUser }) {
  const router = useRouter();
  const styles = { ...leftStyle, ...profile };
  const [currentUser, setCurrentUser] = useState();

  const handleLogout = (e) => {
    e.preventDefault();
    removeAuth();
    window.location.href = "/";
    removeItem(GAME_PLAYED_COUNT);
    removeItem(IS_GAME_PLAYED);
    // router.push("/");
  };

  useEffect(() => {
    setCurrentUser(updatedUser);
  }, [updatedUser]);

  const buildSidebarLink = () => {
    return (
      <div className={menuStyles.menuItems}>
        <ul>
          {SIDEBAR_LINK.map((link) => {
            let linkClass =
              link.to === router.pathname ? menuStyles.active : "";
            return (
              <li key={link.to}>
                <Link prefetch={false} href={link.to} className={linkClass}>
                  {link.name}
                </Link>
              </li>
            );
          })}

          <li key="logout">
            <Link prefetch={false} href="/" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const profileJSX = () => {
    const {
      nickName,
      firstName,
      lastName,
      avtar,
      gender,
      userName: uName,
    } = currentUser || auth.user;

    let userImage = getUserImage(avtar, gender);

    let userName;
    if (firstName) {
      userName = `${firstName} ${lastName}`;
    } else if (nickName) {
      userName = nickName;
    } else {
      userName = uName;
    }

    return (
      <div className={styles.menuProfile}>
        <div className={styles.profilePic}>
          <div className={styles.online}></div>
          <img src={userImage} title="user profile" alt="user profile" />
          {/* <div className={styles.editProfileImg}>Change Photo</div> */}
        </div>
        <p>Welcome Back</p>
        <h2>
          {userName}
          <img
            className={styles.flagImg}
            alt="India"
            title="India"
            src="https://www.atmegame.com/img/india.svg"
            width="24px"
            height="14px"
          />
        </h2>
      </div>
    );
  };

  return (
    <div className={styles.dashboardLeftMenu}>
      <div className={styles.menuSection}>
        <div className={styles.shadowCard}>
          <div className={styles.profile}>
            {auth?.user ? profileJSX() : <MiniShimmer />}
          </div>

          {buildSidebarLink()}
        </div>
      </div>
    </div>
  );
}
