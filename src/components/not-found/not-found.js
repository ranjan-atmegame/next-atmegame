"use client";
import styles from "./not-found.module.css";
import Image from "next/image";
import Card from "../ui/card/Card";
import Link from "next/link";
import useDevice from "@/hooks/useDevice";
import { SLIDES_IMG_PATH } from "@/utils/Constants";

export default function NotFound({ games }) {
  const [mobile] = useDevice();
  const device = mobile ? "mobile" : "desktop";

  return (
    <Card cardWidth="w100" cardColor="noShadow">
      <div className={styles.notFound}>
        <div className={styles.innerSec}>
          <Image
            width="520"
            height="350"
            src="/img/error_404.svg"
            alt="404 Not Found"
            title="404 Not Found"
          />
          <h1>This Page is unknown or does not exist</h1>
          <p>
            Sorry! We are unable to process your current request. Go back to
            home
          </p>
          <Link className={`${styles.goToHome} ${styles.shine}`} href={`/`}>
            Go Back to home
          </Link>

          <div className={styles.gameItem}>
            <h3 className={styles.topGame}>Top Weekly Games</h3>
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
        </div>
      </div>
    </Card>
  );
}
