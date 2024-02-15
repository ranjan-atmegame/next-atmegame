"use client";

export default function Stats({ styles, user }) {
  if (!user) {
    return null;
  }

  return (
    <div className={styles.cardParent}>
      <div className={`${styles.shadowCard} ${styles.smCard}`}>
        <i className={styles.rank}></i>
        <div className={styles.statsTxt}>
          <h3>#{user.rank}</h3>
          <span> Overall Rank</span>
        </div>
      </div>
      <div className={`${styles.shadowCard} ${styles.smCard}`}>
        <i className={styles.friends}></i>
        <div className={styles.statsTxt}>
          <h3>0</h3>
          <span> Friends</span>
        </div>
      </div>
      <div className={`${styles.shadowCard} ${styles.smCard}`}>
        <i className={styles.liked}></i>
        <div className={styles.statsTxt}>
          <h3>{user.likes.length}</h3>
          <span>Liked Games</span>
        </div>
      </div>
      <div className={`${styles.shadowCard} ${styles.smCard}`}>
        <i className={styles.played}></i>
        <div className={styles.statsTxt}>
          <h3>{user.totalPlayed.length}</h3>
          <span>Games Played</span>
        </div>
      </div>
      <div className={`${styles.shadowCard} ${styles.smCard}`}>
        <i className={styles.coins}></i>
        <div className={styles.statsTxt}>
          <h3>+{user.coins}</h3>
          <span>Coins</span>
        </div>
      </div>
    </div>
  );
}
