import CardContainer from "@/components/ui/card/CardContainer";
import styles from "./shimmer.module.css";
import Link from "next/link";
const Shimmer_gameCard = () => {
  const shimmerImgURl = "/img/lazy_bg.png";
  return (
    <section className={`${styles.mainWrapper}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.row} ${styles.rowMobile}`}>
          <div className={`${styles.column}`}>
            <div className={`${styles.card} ${styles.darkBlue}`}>
              <div className={styles.gameDetails}>
                <div className={styles.gameDetailsBody}>
                  <div>
                    <div className={styles.gameHeight}>
                      <div className={styles.playBtn}>
                        <div className={styles.gameCenterContent}>
                          <div
                            className={`${styles.gameImageThumb} ${styles.shine}`}
                          ></div>
                          <span className={styles.shine}>&nbsp;</span>
                          <div className={styles.gray}>&nbsp;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.gameDetailsFooter}>
                  <div className={`${styles.gameLeft} ${styles.shine}`}>
                    <div className={styles.gameThumb}>&nbsp;</div>
                    <h3>&nbsp;</h3>
                  </div>
                  <div className={`${styles.gameRight} ${styles.shine}`}>
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shimmer_gameCard;
