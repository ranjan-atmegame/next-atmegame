import Link from "next/link";
import GameImage from "@/components/ui/images/Icon";
import { formatNumber } from "@/utils";
import styles from "./item.module.css";
import useDevice from "@/hooks/useDevice";
import { SLIDES_IMG_PATH } from "@/utils/Constants";

export default function Item({
  game,
  gameClass,
  priority = false,
  lazy = "eager",
  deskImg = "/img/bg_desktop.png",
  mobiImg = "/img/bg_mobi.png",
  isGameAvailable = true,
  id = "",
}) {
  const [mobile] = useDevice();
  const device = mobile ? "mobile" : "desktop";
  const greyCls = isGameAvailable ? "" : "greyScale";

  let img =
    game && game.image
      ? `${SLIDES_IMG_PATH}${device}/${game.image}_slide.jpg`
      : mobile
      ? mobiImg
      : deskImg;

  return (
    <div
      className={`${styles.gameCard} ${styles[gameClass]} ${styles[greyCls]}`}
      id={id}
    >
      <Link
        prefetch={false}
        href={`/games/${game.slug}`}
        className={styles.gameCardImg}
      >
        <div className={styles.imgwrapper}>
          <GameImage
            src={img}
            className={styles.gameCardImg}
            width="240"
            height="180"
            title={`Play Online ${game.name} Game`}
            alt={`Play Online ${game.name} Game`}
            priority={priority}
            lazy={lazy}
            unoptimized={true} //make it true after testing
          />
        </div>
        <div className={styles.gameDetails}>
          <div className={styles.gameNamePlayed}>
            <h3 className={styles.gameTitle}>{game.name}</h3>
            <span className={styles.gameSubTitle}>
              {formatNumber(game.totalPlayed)} Played
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
