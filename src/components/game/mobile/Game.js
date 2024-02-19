import Link from "next/link";
import Image from "next/image";
import Review from "../Review";
import Card from "@/components/ui/card/Card";
import { SLIDES_IMG_PATH } from "@/utils/Constants";
import CardContainer from "@/components/ui/card/CardContainer";
import styles from "@/components/game/gameDetails.module.css";
import { isValidUrl } from "@/utils";
import GameError from "./../desktop/Error";
import { useState, useEffect } from "react";
import Icon from "@/components/ui/images/Icon";

export default function Game({
  game,
  onGamePlay,
  handle,
  coin,
  coinIcon = "https://www.atmegame.com/img/coin-icon.png",
  noImg = `/img/noGameImage.png`,
}) {
  const { script, isMobile } = game;
  const [gameFound, setGameFound] = useState(true);

  useEffect(() => {
    const isCDN = script.indexOf("cdn.") !== -1;
    if (!isCDN && !isValidUrl(script)) {
      setGameFound(false);
    } else {
      setGameFound(isMobile);
    }
  }, [script, isMobile]);

  return (
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
                  priority={true}
                  unoptimized={true}
                />
                {coin}
              </span>
            )}
            {gameFound ? (
              <Link prefetch={false} href="#" onClick={onGamePlay}>
                <div
                  className={styles.gameImageMobile}
                  style={{ minHeight: "208px" }}
                >
                  {game?.image && (
                    <Icon
                      src={`${SLIDES_IMG_PATH}slide/${game.image}_slide.jpg`}
                      width="328"
                      height="218"
                      alt={game.name}
                      title={game.title}
                      priority={true}
                      unoptimized={true}
                    />
                  )}
                </div>
                <div className={styles.gameImageOverlay}>
                  <div className={styles.playButton}>
                    <h3>Play Games</h3>
                  </div>
                </div>
              </Link>
            ) : (
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
                <GameError mode="Mobile" />
              </>
            )}
          </div>
          {gameFound && game && (
            <Review styles={styles} game={game} handle={handle} />
          )}
        </div>
      </Card>
    </CardContainer>
  );
}
