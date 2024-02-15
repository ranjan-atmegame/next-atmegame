"use client";
import { useState, useEffect } from "react";
import Stats from "./Stats";
import LeftMenu from "./LeftMenu";
import Content from "./leaderboard/Content";
import { authenticate } from "@/api/auth";
import { userProfile } from "@/api/user";
import styles from "./profile/dashboard.module.css";
import CardContainer from "../ui/card/CardContainer";
import CardHeader from "../ui/card/CardHeader";
import Card from "../ui/card/Card";

export default function Leaderboard({ auth: { token }, isMobile }) {
  const [auth, setAuth] = useState([]);

  useEffect(() => {
    const { isSignedIn, token } = authenticate();
    userProfile(token).then((result) => {
      const authData = { isSignedIn, token, user: result };
      setAuth(authData);
    });
  }, []);

  const leaderboardJSX = () => {
    return (
      <>
        <CardHeader
          iconName="match-3"
          slug={``}
          title="Leaderboard"
          isMoreBtn={false}
        />

        <Content token={auth.token} styles={styles} />
      </>
    );
  };

  return (
    <section className={styles.dashboard}>
      <div className={styles.container}>
        <LeftMenu leftStyle={styles} auth={auth} pathname />

        <div className={styles.dashboardRightContent}>
          <Stats styles={styles} user={auth?.user} />
          <div className={styles.contentSec}>
            <div className={`${styles.shadowCard} ${styles.fullSection}`}>
              <div>{auth?.user && leaderboardJSX()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
