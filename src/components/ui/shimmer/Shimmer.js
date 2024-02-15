import styles from "../shimmer/shimmer.module.css";

const Shimmer = () => {
  return (
    <div className={styles.container}>
      {Array(12)
        .fill(" ")
        .map((e, index) => (
          <div className={styles.shimmerCard} key={index}>
            <div className={`${styles.box} ${styles.shimmer}`}></div>
            <div className={`${styles.list} ${styles.shimmer}`}></div>
            <div className={`${styles.list} ${styles.shimmer}`}></div>
            <div className={`${styles.list} ${styles.shimmer}`}></div>
            <div className={`${styles.list} ${styles.shimmer}`}></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
