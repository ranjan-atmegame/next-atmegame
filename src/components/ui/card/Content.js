"use client";
import Image from "next/image";
import Item from "./Item";
import LargeItem from "./LargeItem";
import styles from "./card.module.css";
import CarouselWithScroll from "@/components/common/CarouselWithScroll";
import useDevice from "@/hooks/useDevice";
import { SLIDES_IMG_PATH } from "@/utils/Constants";

const Content = ({
  games,
  gameClass,
  numberOfGames = 6,
  priority = false,
  lazy = "eager",
  gameCategory = [],
  iconName = "",
  categoryPage = false,
}) => {
  const temp_arr = [];
  if (typeof games === "object" && !Array.isArray(games) && games !== null) {
    temp_arr["email"] = games.email;
    temp_arr["avtar"] = games.avtar;
    temp_arr["coins"] = games.coins;
    temp_arr["createdDate"] = games.createdDate;
    temp_arr["dislikes"] = games.dislikes;
    temp_arr["nickName"] = games.nickName;
    temp_arr["userName"] = games.userName;
    temp_arr["lastLogin"] = games.lastLogin;
    temp_arr["favourite"] = games.favourite;
    temp_arr["gender"] = games.gender;
    temp_arr["isNewsletter"] = games.isNewsletter;
    temp_arr["likes"] = games.likes;
    temp_arr["tokens"] = games.tokens;
    temp_arr["totalPlayed"] = games.totalPlayed;
    temp_arr["userType"] = games.userType;
    temp_arr["rank"] = games.rank;
    temp_arr["status"] = games.status;
    temp_arr["transactions"] = games.transactions;
    temp_arr["status"] = games.status;
    temp_arr["dob"] = games.dob;
    temp_arr["createdDate"] = games.createdDate;
    games = temp_arr;
  }

  const [mobile] = useDevice();
  const device = mobile ? "mobile" : "desktop";

  if (gameClass === "gameOne") {
    const [game] = games;
    return (
      <div className={styles.cardBody}>
        <LargeItem game={game} gameClass={gameClass}>
          <Image
            src={`${SLIDES_IMG_PATH}slide/${game.image}_slide.jpg`}
            className={styles.gameCardImg}
            width="395"
            height="264"
            title={`Play Online ${game.name} Game`}
            alt={`Play Online ${game.name} Game`}
            priority={true}
            unoptimized={true}
          />
        </LargeItem>
      </div>
    );
  }

  return (
    <>
      <div className={styles.cardBody}>
        {games &&
          games.slice(0, numberOfGames).map((game, i) => {
            if (categoryPage && i == 18) {
              return <div key="key18">&nbsp;</div>;
            }
            if (
              categoryPage &&
              gameCategory &&
              Array.isArray(gameCategory) &&
              gameCategory.length > 0 &&
              i == 19
            ) {
              return (
                <div className={styles.catCrawsel} key="key19">
                  <CarouselWithScroll
                    items={gameCategory}
                    title="Related Categories"
                    moreBtn={false}
                    circleCls="circularCard"
                    gameClass="gameSeven"
                    itemsToShow={mobile ? "3" : "8"}
                    slug=""
                    cardColor="noShadow_bg"
                    iconName={iconName}
                    imgCls="roundedImg"
                  />
                </div>
              );
            }
            return (
              <Item
                key={`${game?.name}_${i}`}
                id={`${game?.name}_${i}`}
                game={game}
                gameClass={gameClass}
                priority={priority}
                lazy={lazy}
                isGameAvailable={
                  categoryPage ? (mobile ? game.isMobile : true) : true
                }
              />
            );
          })}
      </div>
    </>
  );
};

export default Content;
