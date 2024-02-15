"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./profile/dashboard.module.css";
import Stats from "./Stats";
import LeftMenu from "./LeftMenu";
import { authenticate } from "@/api/auth";
import { userProfile } from "@/api/user";
import Content from "../ui/card/Content";
import CardHeader from "../ui/card/CardHeader";
import { getDashboardConfig } from "./config";

export default function FavouriteGames({ isMobile }) {
  const router = useRouter();
  const [auth, setAuth] = useState(null);
  const [games, setGames] = useState(null);
  const { gameClass } = getDashboardConfig(isMobile);

  useEffect(() => {
    const { isSignedIn, token } = authenticate();
    userProfile(token).then((result) => {
      const authData = { isSignedIn, token, user: result };
      setAuth(authData);
      setGames(result.favourite);
    });
  }, []);

  if (auth && !auth.isSignedIn) {
    router.push("/signin");
  }

  const favouriteJSX = () => {
    if (!games) {
      return "...";
    }

    return (
      <div>
        <CardHeader
          iconName="top-liked"
          slug={``}
          title="Favourite Games"
          isMoreBtn={false}
        />
        <Content
          games={games}
          gameClass={gameClass}
          numberOfGames={games?.length}
        />
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
              <div className={styles.p16}>{auth?.user && favouriteJSX()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
