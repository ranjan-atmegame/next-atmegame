import CardContainer from "@/components/ui/card/CardContainer";
import styles from "./shimmer.module.css";
import Link from "next/link";
import Image from "next/image";
const Shimmer_colTwo_gameSix = ({ gameTitle }) => {
  const shimmerImgURl = "/img/lazy_bg.png";
  return (
    <section className={`${styles.mainWrapper} ${styles.topSpace}`}>
      <div className={`${styles.container} ${styles.containerBg}`}>
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

        <div className={`${styles.row} ${styles.towGameSix}`}>
          <div className={`${styles.column} ${styles.w66}`}>
            <div className={`${styles.card} ${styles.noShadow}`}>
              <div className={styles.cardBody}>
                <div className={`${styles.gameCard} ${styles.gameThree}`}>
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
                <div className={`${styles.gameCard} ${styles.gameThree}`}>
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
                <div className={`${styles.gameCard} ${styles.gameThree}`}>
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
                <div className={`${styles.gameCard} ${styles.gameThree}`}>
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
                <div className={`${styles.gameCard} ${styles.gameThree}`}>
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
                <div className={`${styles.gameCard} ${styles.gameThree}`}>
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
          <div className={`${styles.column} ${styles.w33}`}>
            <div className={`${styles.gameCard} ${styles.gray}`}>
              <Link href={"#"} className={styles.gameCardImg}>
                <div className={`${styles.imgwrapper} ${styles.shine}`}>
                  <Image
                    src={shimmerImgURl}
                    alt="game image"
                    title="game image"
                    height="264"
                    width="395"
                    unoptimized={true}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shimmer_colTwo_gameSix;
