"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authenticate } from "@/api/auth";
import { userProfile } from "@/api/user";
import Stats from "../Stats";
import LeftMenu from "../LeftMenu";
import Content from "./Content";
import styles from "@/components/dashboard/profile/dashboard.module.css";
import Image from "next/image";
import CardHeader from "@/components/ui/card/CardHeader";

export default function Leaderboard() {
  const router = useRouter();
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const { isSignedIn, token } = authenticate();

    userProfile(token).then((result) => {
      const authData = { isSignedIn, token, user: result };
      setAuth(authData);
    });
  }, []);

  if (auth && !auth.isSignedIn) {
    router.push("/signin");
  }

  const leaderboardJSX = () => {
    return (
      <div className={styles.viewProfile}>
        <CardHeader
          slug={`online-${aCategory.slug}-games`}
          title={`${aCategory.name} Games`}
        />
        {/* <div className={styles.profileHeader}>
          <h2>
            <span className={styles.b_border}>New Games</span>
            <a href="/s">
              <span className={viewMore}>
                More
                <Image
                  alt="View More New Games"
                  title="View More New Games"
                  loading="lazy"
                  width="18"
                  height="18"
                  decoding="async"
                  data-nimg="1"
                  class="card_moreIcon__eDqzE"
                  style="color:transparent"
                  src="http://localhost:3000/img/arrow-right.svg"
                />
              </span>
            </a>
          </h2>
        </div> */}
        {/* <Content games={games} gameClass="gameSix" /> */}
        {auth && <Content token={auth.token} styles={styles} />}
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
            <div className={`${styles.shadowCard} ${styles.fullSection}`}>
              <div className={styles.p16}>{auth?.user && leaderboardJSX()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
