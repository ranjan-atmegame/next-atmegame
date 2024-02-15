"use client";
import Link from "next/link";
import GameImage from "@/components/ui/images/Icon";
import styles from "./item.module.css";
import { SLIDES_IMG_PATH } from "@/utils/Constants";
import useDevice from "@/hooks/useDevice";

const SliderItem = ({ game, gameClass, src, specialDevice="" }) => {
  const [mobile] = useDevice();
  const device = specialDevice ? specialDevice : mobile ? "mobile" : "desktop";

  return (
    <div className={`${styles.gameCard} ${styles[gameClass]} itemWidth`}>
      <Link href={`/games/${game.slug}`} className={styles.gameCardImg}>
        <div className={styles.imgwrapper}>
          <GameImage
            src={`${SLIDES_IMG_PATH}${device}/${game.image}_slide.jpg`}
            className={styles.gameCardImg}
            width="160"
            height="120"
            title={`Play Online ${game.name} Game`}
            alt={`Play Online ${game.name} Game`}
            rel="preload"
          />
        </div>
        {/* <p>{game.name}</p> */}
      </Link>
    </div>
  );
};

export default SliderItem;
