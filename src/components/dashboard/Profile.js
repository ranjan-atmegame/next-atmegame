"use client";
import { useState, useEffect } from "react";
import { userProfile } from "@/api/user";
// import Link from "next/link";
// import Card from "@/components/ui/card/Card";
// import CardHeader from "@/components/ui/card/CardHeader";
// import ProfileHeader from "../ui/card/ProfileHeader";
// import Content from "@/components/ui/card/Content";
// import Profilecontent from "../ui/card/Profilecontent";
// import CardContainer from "@/components/ui/card/CardContainer";
// import ProfileSidebar from "../ui/card/ProfileSidebar";
import LeftMenu from "./LeftMenu";
import Stats from "./Stats";
import ViewProfile from "./profile/View";
import { authenticate } from "@/api/auth";
import styles from "./profile/dashboard.module.css";

export default function Profile({ auth: { token }, isMobile }) {
  const [auth, setAuth] = useState(null);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const { isSignedIn, token } = authenticate();
    userProfile(token).then((result) => {
      const authData = { isSignedIn, token, user: result };
      setAuth(authData);
      setGames(result.likes);
    });
  }, []);

  const gameClass = isMobile ? "gameTwo" : "gameSix";

  return (
    <section className={styles.dashboard}>
      <div className={styles.container}>
        <LeftMenu leftStyle={styles} auth={auth} pathname />

        <div className={styles.dashboardRightContent}>
          <Stats styles={styles} user={auth?.user} />
          <div className={styles.contentSec}>
            <div className={`${styles.shadowCard} ${styles.fullSection}`}>
              <div className={styles.p16}>
                {auth?.user && <ViewProfile user={auth.user} games={games} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
