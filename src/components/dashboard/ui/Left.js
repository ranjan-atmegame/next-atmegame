import { useState, useEffect } from "react";
import Block from "./Block";
import { dashboardRecommendGame } from "@/api/dashboard";

function Left({ styles, auth }) {
  const [recommended, setRecommended] = useState(null);

  const { user, token } = auth;
  useEffect(() => {
    if (token) {
      dashboardRecommendGame(token, 4).then((response) => {
        if (response.status !== "success") {
          return setRecommended([]);
        }

        return setRecommended(response.result);
      });
    }
  }, [token]);

  const recommendedGamesJSX = (
    <div className={`${styles.shadowCard} ${styles.mT16}`}>
      <div className={styles.p16}>
        <Block
          slug={"/user/recommended-games"}
          title="Games for you"
          iconName="simulation"
          games={recommended}
        />
      </div>
    </div>
  );

  const likedGamesJSX = (
    <div className={`${styles.shadowCard} ${styles.mT16}`}>
      <div className={styles.p16}>
        <Block
          slug={"/user/liked"}
          title="Liked Games"
          iconName="top-liked"
          games={user.likes.slice(0, 4)}
        />
      </div>
    </div>
  );

  const favouriteGamesJSX = (
    <div className={`${styles.shadowCard} ${styles.mT16}`}>
      <div className={styles.p16}>
        <Block
          slug={"/user/favourites"}
          title="Favourite Games"
          iconName="top-rated"
          games={user.favourite.slice(0, 4)}
        />
      </div>
    </div>
  );

  const totalGamesJSX = (
    <div className={`${styles.shadowCard} ${styles.mT16}`}>
      <div className={styles.p16}>
        <Block
          slug={"/user/games-played"}
          title="Games Played"
          iconName="multuiplayer"
          games={user.totalPlayed.slice(0, 4)}
        />
      </div>
    </div>
  );

  return (
    <div className={styles.left}>
      {recommendedGamesJSX}
      {likedGamesJSX}
      {favouriteGamesJSX}
      {totalGamesJSX}
    </div>
  );
}

export default Left;
