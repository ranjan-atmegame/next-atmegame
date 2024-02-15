import Image from "next/image";
import Review from "../Review";
import Card from "@/components/ui/card/Card";
import { SLIDES_IMG_PATH } from "@/utils/Constants";
import CardContainer from "@/components/ui/card/CardContainer";
import styles from "@/components/game/gameDetails.module.css";
import { useEffect, useState } from "react";
import { isValidUrl } from "@/utils";
import GameError from "./Error";
import Ad from "@/components/ad";
import Icon from "@/components/ui/images/Icon";

export default function GameThumbnail({
  game,
  loadGames,
  handle,
  coin,
  tooglePlayBtnCLs = "playBtn",
  coinIcon = "https://www.atmegame.com/img/coin-icon.png",
  noImg = `/img/noGameImage.png`,
  playImg = "/img/play.svg",
}) {
  const { script } = game;
  const [gameFound, setGameFound] = useState(true);

  useEffect(() => {
    const isCDN = script.indexOf("cdn.") !== -1;
    if (!isCDN && !isValidUrl(script)) {
      setGameFound(false);
    }
  }, [script]);

  return (
    <>
      <CardContainer>
        <Card cardColor="darkBlue">
          <div className={styles.gameDetails}>
            <div
              className={`${gameFound ? "" : styles.noFoundGame} ${
                styles.gameDetailsBody
              }`}
            >
              {gameFound && (
                <span className={styles.coinsBedge}>
                  <Image
                    src={coinIcon}
                    width={20}
                    height={20}
                    alt={"Coins"}
                    unoptimized={true}
                  />
                  {coin}
                </span>
              )}
              <div>
                <div
                  className={gameFound ? "" : styles.noFoundmiddleBox}
                  style={{ minHeight: "700px" }}
                >
                  {gameFound && game?.image && (
                    <Image
                      src={`${SLIDES_IMG_PATH}slide/${game.image}_slide.jpg`}
                      width="500"
                      height="400"
                      alt={game.name}
                      title={game.title}
                      priority={true}
                      className={styles.gameImage}
                      unoptimized={true}
                    />
                  )}
                  {!gameFound && (
                    <>
                      <Image
                        src={noImg}
                        width="500"
                        height="400"
                        alt="no-image"
                        title="no-image"
                        priority={true}
                        className={`${styles.gameImage} ${styles.gameImageContain}`}
                        unoptimized={true}
                      />
                      <GameError />
                    </>
                  )}
                </div>
                {gameFound && (
                  <div className={styles[tooglePlayBtnCLs]}>
                    <div className={styles.gameCenterContent}>
                      <Icon
                        src={`${SLIDES_IMG_PATH}desktop/${game.image}_slide.jpg`}
                        width="240"
                        height="150"
                        alt={game.name}
                        title={game.title}
                        priority={true}
                        iconClass={styles.gameImageThumb}
                        unoptimized={true}
                      />
                      <span
                        onClick={(e) => loadGames(e)}
                        style={{ marginBottom: "20px" }}
                      >
                        Play Now
                        <Image
                          width={20}
                          height={20}
                          src={playImg}
                          alt="Play Game"
                          priority
                          unoptimized={true}
                        />
                      </span>
                      <Ad cardColor="noShadow_bg_center" responsiveAd={false} />
                    </div>
                  </div>
                )}
              </div>
            </div>
            {gameFound && game && (
              <Review
                styles={styles}
                game={game}
                handle={handle}
                loadGames={loadGames}
              />
            )}
          </div>
        </Card>
      </CardContainer>
    </>
  );
}
