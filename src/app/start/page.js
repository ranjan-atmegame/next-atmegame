import Link from "next/link";
import { redirect } from "next/navigation";
import Ad from "@/components/ad";
import CardContainer from "@/components/ui/card/CardContainer";
import StartGame from "@/components/publisherEntryPoint/startGame";
import styles from "@/components/publisherEntryPoint/start.module.css";
import { getDevice } from "@/app/server";
import { topWeeklyGamesSearch } from "@/api/search";

const Start = async () => {
  const { result } = await topWeeklyGamesSearch();
  const isMobile = getDevice();

  if (!isMobile) {
    redirect("/");
  }

  return (
    <div className={styles.start}>
      <CardContainer>
        <Ad
          cardColor="noShadow_bg_mobiAd"
          responsiveAd={isMobile}
          name="home-advertisment"
        />
      </CardContainer>

      <CardContainer>
        <div className={styles.gameAndQuizes}>
          <div className={styles.header}>
            <Link href="/">
              <h1>Play Games and Quizzes!</h1>
              <h4>We selected some best games for you.</h4>
            </Link>
          </div>
          <div className={styles.body}>
            <StartGame topWeeklyGames={result} />
          </div>
          <div className={styles.footer}>
            <div className={styles.signIn}>
              <Link href="/signin">Sign In</Link>
              <span>Or</span>
              <Link href="/signup">Sign Up</Link>
            </div>
            <div className={styles.moreGames}>
              <Link className={styles.moreGamesBtn} href="/">
                No, Show more Games
              </Link>
            </div>
          </div>
        </div>
      </CardContainer>
    </div>
  );

  // return (
  //   <PublisherEntryPoint topGames={topWeeklyGames?.result} />
  // );
};
export default Start;
