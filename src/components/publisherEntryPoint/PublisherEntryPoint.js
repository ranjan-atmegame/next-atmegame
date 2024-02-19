import Ad from "@/components/ad";
import styles from "./start.module.css";
import CardContainer from "@/components/ui/card/CardContainer";
import Link from "next/link";
import StartGame from "./startGame";

export default function PublisherEntryPoint({
  heading = "Play Games and Quizzes!",
  subHeading = "We selected some best games for you.",
  topGames,
}) {
  return (
    <div className={styles.start}>
      <CardContainer>
        <Ad cardColor="noShadow_bg_mobiAd" />
      </CardContainer>

      <CardContainer>
        <div className={styles.gameAndQuizes}>
          <div className={styles.header}>
            <Link prefetch={false} href="/">
              <h1>{heading}</h1>
              <h4>{subHeading}</h4>
            </Link>
          </div>
          <div className={styles.body}>
            <StartGame topWeeklyGames={topGames} />
          </div>
          <div className={styles.footer}>
            <div className={styles.signIn}>
              <Link prefetch={false} href="/signin">
                Sign In
              </Link>
              <span>Or</span>
              <Link prefetch={false} href="/signup">
                Sign Up
              </Link>
            </div>
            <div className={styles.moreGames}>
              <Link prefetch={false} className={styles.moreGamesBtn} href="/">
                No, Show more Games
              </Link>
            </div>
          </div>
        </div>
      </CardContainer>
    </div>
  );
}
