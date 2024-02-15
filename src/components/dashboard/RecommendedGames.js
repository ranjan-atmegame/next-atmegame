"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./profile/dashboard.module.css";
import Stats from "./Stats";
import LeftMenu from "./LeftMenu";
import { authenticate } from "@/api/auth";
import { userRecommendedGames, userProfile } from "@/api/user";
import Content from "../ui/card/Content";
import { getDashboardConfig } from "./config";
import CardContainer from "../ui/card/CardContainer";
import CardHeader from "../ui/card/CardHeader";
import Card from "../ui/card/Card";

export default function RecommendedGames({ isMobile }) {
  const router = useRouter();
  const [auth, setAuth] = useState(null);
  const [games, setGames] = useState(null);
  const { gameClass } = getDashboardConfig(isMobile);

  useEffect(() => {
    const { isSignedIn, token } = authenticate();

    userRecommendedGames(token, 0, 10).then((games) => {
      setGames(games);
    });

    userProfile(token).then((user) => {
      const authData = { isSignedIn, token, user };
      setAuth(authData);
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
      <CardContainer
        isContainerStyle={true}
        header={
          <CardHeader
            slug={``}
            title="Recommeded Games"
            isMoreBtn={false}
            iconName="similarGames"
          />
        }
      >
        <Card cardWidth="w100" cardColor="noShadow">
          <Content
            games={games}
            gameClass={gameClass}
            numberOfGames={games?.length}
            priority={true}
          />
        </Card>
      </CardContainer>
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
              <div>{auth?.user && likedJSX()}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
