import Card from "@/components/ui/card/Card";
import styles from "@/components/common/cardshimmer.module.css";
import useDevice from "@/hooks/useDevice";

export default function Shimmer({ type = "commomn", count = 10 }) {
  const shimmer = new Array(count).fill(0);
  const [mobile] = useDevice();

  if (type == "blog") {
    return (
      <ul className={styles.blogListParent} style={{ width: "100%" }}>
        {shimmer.map((item, i) => (
          <li className={styles.blogList} key={i} style={{ width: "100%" }}>
            <Card cardColor="grey">
              <div className={`${styles.shimmerEffect} ${styles.imageDiv}`}>
                &nbsp;
              </div>
              <div className={`${styles.shimmerEffect} ${styles.date}`}>
                &nbsp;
              </div>
              <div className={`${styles.shimmerEffect} ${styles.head}`}>
                &nbsp;
              </div>
              <div className={`${styles.shimmerEffect} ${styles.desp}`}>
                &nbsp;
              </div>
            </Card>
          </li>
        ))}
      </ul>
    );
  } else if (type == "search") {
    return (
      <ul
        className={`${styles.blogListParent} ${styles.searchList}`}
        style={{ width: "100%" }}
      >
        {shimmer.map((item, i) => (
          <li className={styles.blogList} key={i} style={{ width: "100%" }}>
            <div className={styles.searchShimmerBox}>
              <div
                className={`${styles.shimmerEffect} ${styles.imageDivSearch}`}
              >
                &nbsp;
              </div>
              <div className={`${styles.shimmerEffect} ${styles.serachTxt}`}>
                &nbsp;
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className={styles.commonShimmer}>
      {shimmer.map((item, i) => (
        <Card cardColor="grey" key={i}>
          <div className={`${styles.shimmerEffect} ${styles.imageDivCommon}`}>
            &nbsp;
          </div>
          <div className={`${styles.shimmerEffect} ${styles.line}`}>&nbsp;</div>
          <div
            className={`${styles.shimmerEffect} ${styles.line} ${styles.line1}`}
          >
            &nbsp;
          </div>
          <div
            className={`${styles.shimmerEffect} ${styles.line} ${styles.line2}`}
          >
            &nbsp;
          </div>
        </Card>
      ))}
    </div>
  );
}
