import Link from "next/link";
import { formatNumber } from "@/utils";
import styles from "./item.module.css";

export default function Item({ game, gameClass, children }) {
  return (
    <div className={`${styles.gameCard} ${styles[gameClass]}`}>
      <Link href={`/games/${game.slug}`} className={styles.gameCardImg}>
        <div className={styles.imgwrapper}>{children}</div>
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
