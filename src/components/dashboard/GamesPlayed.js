"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./profile/dashboard.module.css";
import TotalPlayed from "./profile/TotalPlayed";
import Stats from "./Stats";
import LeftMenu from "./LeftMenu";
import { authenticate } from "@/api/auth";
import { userProfile } from "@/api/user";
import { getDashboardConfig } from "./config";

export default function GamesPlayed({ isMobile }) {
  const router = useRouter();
  const [auth, setAuth] = useState(null);
  const [games, setGames] = useState(null);
  const { gameClass } = getDashboardConfig(isMobile);

  useEffect(() => {
    const { isSignedIn, token } = authenticate();
    userProfile(token).then((result) => {
      const authData = { isSignedIn, token, user: result };
      setAuth(authData);
      setGames(result.totalPlayed);
    });
  }, []);

  if (auth && !auth.isSignedIn) {
    router.push("/signin");
  }

  return (
    <section className={styles.dashboard}>
      <div className={styles.container}>
        <LeftMenu leftStyle={styles} auth={auth} pathname />

        <div className={styles.dashboardRightContent}>
          <Stats styles={styles} user={auth?.user} />
          <div className={styles.contentSec}>
            <div className={`${styles.shadowCard} ${styles.fullSection}`}>
              <div className={styles.p16}>
                {auth?.user && (
                  <TotalPlayed games={games} gameClass={gameClass} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
