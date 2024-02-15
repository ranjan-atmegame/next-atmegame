import CardContainer from "@/components/ui/card/CardContainer";
import styles from "./shimmer.module.css";
import Link from "next/link";
import Image from "next/image";
const Shimmer_singleRow_container = ({ gameTitle }) => {
  const shimmerImgURl = "/img/lazy_bg.png";
  return (
    <section className={`${styles.mainWrapper}`}>
      <div className={`${styles.container} ${styles.containerBg}`}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={`${styles.card} ${styles.scrollList}`}>
              <div className={styles.cardHeader}>
                <div className={styles.gameCategory}>
                  <div className={`${styles.catListIcon} ${styles.shine}`}>
                    &nbsp;
                  </div>
                  <h2 className={styles.shine}>{gameTitle}</h2>
                  <Link
                    href={"#"}
                    className={`${styles.headingMore} ${styles.shine}`}
                  >
                    <span className={styles.viewMor}>&nbsp;</span>
                    <span className={styles.moreIcon}></span>
                  </Link>
                </div>
              </div>
              <div className={styles.cardBody}>
                <div
                  className={`${styles.gameCard} ${styles.gameSeven} ${styles.itemWidth}`}
                >
                  <Link href={"#"} className={styles.gameCardImg}>
                    <div className={`${styles.imgwrapper} ${styles.shine}`}>
                      <Image
                        src={shimmerImgURl}
                        alt="game image"
                        title="game image"
                        height="180"
                        width="240"
                        unoptimized={true}
                      />
                    </div>
                  </Link>
                </div>
                <div
                  className={`${styles.gameCard} ${styles.gameSeven} ${styles.itemWidth}`}
                >
                  <Link href={"#"} className={styles.gameCardImg}>
                    <div className={`${styles.imgwrapper} ${styles.shine}`}>
                      <Image
                        src={shimmerImgURl}
                        alt="game image"
                        title="game image"
                        height="180"
                        width="240"
                        unoptimized={true}
                      />
                    </div>
                  </Link>
                </div>
                <div
                  className={`${styles.gameCard} ${styles.gameSeven} ${styles.itemWidth}`}
                >
                  <Link href={"#"} className={styles.gameCardImg}>
                    <div className={`${styles.imgwrapper} ${styles.shine}`}>
                      <Image
                        src={shimmerImgURl}
                        alt="game image"
                        title="game image"
                        height="180"
                        width="240"
                        unoptimized={true}
                      />
                    </div>
                  </Link>
                </div>
                <div
                  className={`${styles.gameCard} ${styles.gameSeven} ${styles.itemWidth}`}
                >
                  <Link href={"#"} className={styles.gameCardImg}>
                    <div className={`${styles.imgwrapper} ${styles.shine}`}>
                      <Image
                        src={shimmerImgURl}
                        alt="game image"
                        title="game image"
                        height="180"
                        width="240"
                        unoptimized={true}
                      />
                    </div>
                  </Link>
                </div>
                <div
                  className={`${styles.gameCard} ${styles.gameSeven} ${styles.itemWidth}`}
                >
                  <Link href={"#"} className={styles.gameCardImg}>
                    <div className={`${styles.imgwrapper} ${styles.shine}`}>
                      <Image
                        src={shimmerImgURl}
                        alt="game image"
                        title="game image"
                        height="180"
                        width="240"
                        unoptimized={true}
                      />
                    </div>
                  </Link>
                </div>
                <div
                  className={`${styles.gameCard} ${styles.gameSeven} ${styles.itemWidth}`}
                >
                  <Link href={"#"} className={styles.gameCardImg}>
                    <div className={`${styles.imgwrapper} ${styles.shine}`}>
                      <Image
                        src={shimmerImgURl}
                        alt="game image"
                        title="game image"
                        height="180"
                        width="240"
                        unoptimized={true}
                      />
                    </div>
                  </Link>
                </div>
                <div
                  className={`${styles.gameCard} ${styles.gameSeven} ${styles.itemWidth}`}
                >
                  <Link href={"#"} className={styles.gameCardImg}>
                    <div className={`${styles.imgwrapper} ${styles.shine}`}>
                      <Image
                        src={shimmerImgURl}
                        alt="game image"
                        title="game image"
                        height="180"
                        width="240"
                        unoptimized={true}
                      />
                    </div>
                  </Link>
                </div>
                <div
                  className={`${styles.gameCard} ${styles.gameSeven} ${styles.itemWidth}`}
                >
                  <Link href={"#"} className={styles.gameCardImg}>
                    <div className={`${styles.imgwrapper} ${styles.shine}`}>
                      <Image
                        src={shimmerImgURl}
                        alt="game image"
                        title="game image"
                        height="180"
                        width="240"
                        unoptimized={true}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shimmer_singleRow_container;
