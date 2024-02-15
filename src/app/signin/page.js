import Image from "next/image";
import { redirect } from "next/navigation";
import Form from "@/components/auth/signin/Form";
import { S3_IMAGE_PATH } from "@/utils/Constants";
import { getAuth, getRobot } from "../server";
import styles from "@/components/auth/signin/login.module.css";

export async function generateMetadata() {
  const { robots, host } = getRobot(true);
  const canonical = host + "/signin";

  return {
    title: "Sign In to Dashboard",
    description:
      "Sign in to Atmegame for endless gaming fun! Access your account and dive into a world of online games today.",
    keywords: ["Signin", "atmegame.com"],
    metadataBase: new URL("https://www.atmegame.com"),
    alternates: {
      canonical,
    },
    robots,
  };
}

export default function Page() {
  const auth = getAuth();

  if (auth.isSignedIn) {
    redirect("/");
  }

  return (
    <section className={styles.mainLogin}>
      <div className={styles.container}>
        <div className={styles.formPage}>
          <div className={styles.leftBox}>
            <div className={styles.commonImgBox}>
              <Image
                src={`${S3_IMAGE_PATH}/img/login-image.svg`}
                title="login"
                alt="login"
                width="298"
                height="297"
                priority={true}
                unoptimized={true}
              />
            </div>
            <h2>Sign into your account</h2>
            <div className={styles.whyList}>
              <ul>
                <li className={styles.list}>Win Coins on every game play!</li>
                <li className={styles.list}>
                  the complete games statistics like Leaderboard, high scores,
                  and rankings.
                </li>
                <li className={styles.list}>
                  Get latest update of launching any new game.{" "}
                </li>
                <li className={styles.list}>keep you engrossed for hours</li>
                <li className={styles.list}>
                  an extensive variety of free online games&nbsp;
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.rightBox}>
            <Form styles={styles} />
          </div>
        </div>
      </div>
    </section>
  );
}
