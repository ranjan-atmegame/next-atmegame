import Content from "@/components/ui/card/Content";
import styles from "./dashboard.module.css";

export default function Recommended({ user }) {
  if (!user) {
    return "...";
  }

  return (
    <div className={styles.viewProfile}>
      <div className={styles.profileHeader}>
        <h2>Recommend Games</h2>
      </div>
      <div className={styles.content}>
        <Content games={user.totalPlayed} gameClass="gameFour" />
      </div>
    </div>
  );
}
