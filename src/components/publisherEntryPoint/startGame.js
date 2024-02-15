"use client";
import Link from "next/link";
import styles from "./start.module.css";
import Image from "next/image";
import { SLIDES_IMG_PATH } from "@/utils/Constants";
import { useState } from "react";
import useDevice from "@/hooks/useDevice";

const TopGames = ({ topWeeklyGames }) => {
  const [games, setGames] = useState(topWeeklyGames);
  const [mobile] = useDevice();
  const device = mobile ? "mobile" : "desktop";

  return (
    <div className={styles.gameItem}>
      {games && Array.isArray(games) && games.length > 0 && (
        <ul>
          {games.map((game) => (
            <li key={game.name}>
              <Link href={`/games/${game.slug}`}>
                <Image
                  src={`${SLIDES_IMG_PATH}${device}/${game.image}_slide.jpg`}
                  alt={`Play Online ${game.name} Game`}
                  title={`Play Online ${game.name} Game`}
                  className={styles.itemImage}
                  width="220"
                  height="165"
                  unoptimized={true}
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopGames;
