"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./profile/dashboard.module.css";
import Stats from "./Stats";
import LeftMenu from "./LeftMenu";
import Left from "./ui/Left";
import Right from "./ui/Right";
import { authenticate } from "@/api/auth";
import { userProfile } from "@/api/user";
import Content from "../ui/card/Content";

export default function LikedGames() {
  const router = useRouter();
  const [auth, setAuth] = useState(null);
  const [games, setGames] = useState(null);

  useEffect(() => {
    const { isSignedIn, token } = authenticate();
    userProfile(token).then((result) => {
      const authData = { isSignedIn, token, user: result };
      setAuth(authData);
      setGames(result.likes);
    });
  }, []);

  if (auth && !auth.isSignedIn) {
    router.push("/signin");
  }

  const likedJSX = () => {
    if (!games) {
      return "...";
    }

    return (
      <div className={styles.viewProfile}>
        <div className={styles.profileHeader}>
          <h2>Dashboard</h2>
        </div>
        <Content games={games} gameClass="gameSix" />
      </div>
    );
  };

  return (
    <section className={styles.dashboard}>
      <div className={styles.container}>
        <LeftMenu leftStyle={styles} auth={auth} pathname />

        <div className={styles.dashboardRightContent}>
          <Stats styles={styles} user={auth?.user} />

          <div className={styles.contentSec}>
            {auth?.token && <Left styles={styles} auth={auth} />}

            <Right styles={styles} auth={auth} />
          </div>
        </div>
      </div>
    </section>
  );
}
