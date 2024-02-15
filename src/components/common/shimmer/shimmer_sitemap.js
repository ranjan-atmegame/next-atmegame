import CardContainer from "@/components/ui/card/CardContainer";
import styles from "./shimmer.module.css";
import Link from "next/link";
import Image from "next/image";
const Shimmer_sitemap = ({ gameTitle }) => {
  const shimmerImgURl = "/img/lazy_bg.png";
  return (
    <section className={`${styles.mainWrapper}`}>
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
        <div className={`${styles.row} ${styles.rowMobile}`}>
          <div className={styles.siteMap}>
            <ul>
              <li className={`${styles.allSubCat} ${styles.shine}`}>
                <Link href={`#`}>
                  <Image
                    src="/img/lazy_bg.png"
                    title="game"
                    alt="game"
                    width="36"
                    height="36"
                    unoptimized={true}
                  />
                  <span>&nbsp;</span>
                </Link>
              </li>
              <ul className={styles.subCatBg}>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li
                  className={`${styles.subcategory} ${styles.shine} ${styles.mobHideChips}`}
                >
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
              </ul>
              <li className={`${styles.allSubCat} ${styles.shine}`}>
                <Link href={`#`}>
                  <Image
                    src="/img/lazy_bg.png"
                    title="game"
                    alt="game"
                    width="36"
                    height="36"
                    unoptimized={true}
                  />
                  <span>&nbsp;</span>
                </Link>
              </li>
              <ul className={styles.subCatBg}>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li
                  className={`${styles.subcategory} ${styles.shine} ${styles.mobHideChips}`}
                >
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
              </ul>
              <li className={`${styles.allSubCat} ${styles.shine}`}>
                <Link href={`#`}>
                  <Image
                    src="/img/lazy_bg.png"
                    title="game"
                    alt="game"
                    width="36"
                    height="36"
                    unoptimized={true}
                  />
                  <span>&nbsp;</span>
                </Link>
              </li>
              <ul className={styles.subCatBg}>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li className={`${styles.subcategory} ${styles.shine}`}>
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
                <li
                  className={`${styles.subcategory} ${styles.shine} ${styles.mobHideChips}`}
                >
                  <Link href={`#`}>
                    <span>&nbsp;</span>
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shimmer_sitemap;
