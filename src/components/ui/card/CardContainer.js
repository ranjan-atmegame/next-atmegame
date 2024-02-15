import styles from "@/components/layout/common.module.css";
import CardHeader from "./CardHeader";

export default function CardContainer({
  children,
  header = null,
  topGames = false,
  topGamesWhite = false,
  isContainerStyle = false,
}) {
  topGames = topGames ? styles.topGames : "";
  topGamesWhite = topGamesWhite ? styles.topGamesWhite : "";
  const containerBGStyle = isContainerStyle ? styles.containerBg : "";

  return (
    <section className={`${styles.mainWrapper} ${topGames} ${topGamesWhite} `}>
      <div className={`${styles.container} ${containerBGStyle}`}>
        {/* <CardHeader slug="fajlfjla" title="fjlajflajfljl" /> */}
        {header}
        <div className={styles.row}>{children}</div>
      </div>
    </section>
  );
}
