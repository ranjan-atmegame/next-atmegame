"use client";
import { useEffect } from "react";
import Image from "next/image";
import CardContainer from "@/components/ui/card/CardContainer";
import styles from "./aboutUs.module.css";
import Button from "@/components/common/Button";
import { S3_IMAGE_PATH } from "@/utils/Constants";
import Link from "next/link";

export default function AboutUs() {
  const bodyClass = styles.bodyWhite;
  useEffect(() => {
    document.body.classList.add(bodyClass);
    return () => {
      document.body.classList.remove(bodyClass);
    };
  }, []);

  return (
    <CardContainer isContainerStyle={true}>
      <section className={styles.mainAboutUs}>
        <div className={styles.wrapper}>
          <div className={styles.miniContainer}>
            <div className={styles.joinPrograme}>
              <Image
                src={`/img/partner2.png`}
                width={120}
                height={120}
                alt="about us"
                title="About Us"
                priority
                unoptimized={true}
              />
              <h2>Join Our program and become a atmegame Partner</h2>
              <div className={styles.rightBtn}>
                <Link
                  prefetch={false}
                  href="/contact-us"
                  className={styles.joinUsNow}
                >
                  JOIN PROGRAM
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.contentSec}>
            <div className={styles.left}>
              <h1>A Widely Accepted Platform for Fun Seekers</h1>
              <p>
                Atmegame.com is a completely new platform for the online games
                lovers. The best part is that all games available on our website
                are free and can be enjoyable on multiple devices, including
                desktop, mobile phones, tablets, and iPhones or iPads. So, all
                you need to bother only about what kind of new online game you
                want to try and start having fun!
              </p>
              <p>
                It is our pleasure to help players of all ages to explore the
                best world of PC and HTML5 games for free. We respect the
                feelings and tastes of every gamer right from those who are
                crazy for death-defying action challenges to the foodies who
                love to practice their culinary skills by checking out a huge
                variety of cooking games.
              </p>
            </div>

            <div className={styles.right}>
              <Image
                src={`${S3_IMAGE_PATH}/img/submit-a-game-image.svg`}
                width={500}
                height={400}
                alt="about us"
                title="About Us"
                priority
                unoptimized={true}
              />
            </div>
          </div>

          <div className={styles.contentSecDark}>
            <div className={styles.left}>
              <h2>We Compile Best Online Games in One Place</h2>
              <p>
                On atmegame.com, we have got you covered with all the popular
                online games categories, such as high flying airplane games,
                mind boggling puzzles, adrenaline-infused racing games,
                thrilling shooting games, many more. You can even find a
                fabulous collection of stickman games such as Stickman Downhill,
                Stickman Dirtbike, and Stickman Freeride.
              </p>
            </div>
            <div className={styles.rightWithSeperator}>
              <div className={styles.twoCornor}>
                We have collected the best free games to play on the web for
                you. Browse our wider and cool collection of colorful and
                graphically-improved mobile-friendly games and let the
                high-quality entertainment will work for you!
              </div>
            </div>
          </div>

          <div className={styles.overview}>
            <h2>A Brief Overview about Atmegame</h2>
            <p>
              Established in 2015, Atmegame.com is an advanced technology-driven
              gaming portal that continues fulfilling multiple gaming needs of
              players from all age groups. It is a wonderful effort of Apay
              Marketing Private Limited, which is highly valued today for
              employing the power of simulative technologies.
            </p>
            <p>
              With more 5000 games over the website and over 200 in-house games,
              we have today evolved as one of the most popular free online game
              website. Our experts work closely with the knowledgeable and
              skilled game developers to deliver state-of-the-art products.
              Simple and eye-catchy games have helped to increase traffic on our
              website continuously and include us in the list of top game
              websites in India.
            </p>
            <div className={styles.stats}>
              <ul>
                <li>
                  <div className={styles.imageHolder}>
                    <Image
                      width="60"
                      height="60"
                      src="https://www.atmegame.com/img/established-in-about-icon.svg"
                      alt=""
                      title=""
                      loading="lazy"
                      unoptimized={true}
                    />
                  </div>
                  <div className={styles.establist}>
                    <span className={styles.boldText}>2015</span>
                    <span>Established in</span>
                  </div>
                </li>
                <li>
                  <div className={styles.imageHolder}>
                    <Image
                      width="60"
                      height="60"
                      src="https://www.atmegame.com/img/in-house-games-about-icon.svg"
                      alt=""
                      title=""
                      loading="lazy"
                      unoptimized={true}
                    />
                  </div>
                  <div className={styles.establist}>
                    <span
                      className={`${styles.boldText} ${styles.boldTextGreen}`}
                    >
                      200+
                    </span>
                    <span>In-house games</span>
                  </div>
                </li>
                <li>
                  <div className={styles.imageHolder}>
                    <Image
                      width="60"
                      height="60"
                      src="https://www.atmegame.com/img/games-on-website-about-icon.svg"
                      alt=""
                      title=""
                      loading="lazy"
                      unoptimized={true}
                    />
                  </div>
                  <div className={styles.establist}>
                    <span
                      className={`${styles.boldText} ${styles.boldTextOrange}`}
                    >
                      5000+
                    </span>
                    <span>Games on Website</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.visionMission}>
            <div className={styles.ourMission}>
              <div className={styles.leftText}>
                <h2>Our Mission</h2>
                <p>
                  To offer the enormous collection of free online games that
                  players of all ages are sure to love. We through our wider
                  team of professionals proudly maintain our values of
                  collaboration and integrity. We deliberately support our
                  developers and their quality work, while working hard on key
                  points on how to grow a rich and connected player community.
                </p>
                <Image
                  src={`${S3_IMAGE_PATH}/img/our-mission.svg`}
                  width={350}
                  height={350}
                  alt="Our mission"
                  loading="lazy"
                  unoptimized={true}
                />
              </div>
            </div>
            <div className={`${styles.ourMission} ${styles.visionSpacer}`}>
              <div className={`${styles.leftText} ${styles.leftspacer}`}>
                <h2>Our Vision</h2>
                <p>
                  With a vision of creating a worldwide accepted free online
                  gaming platform, we are focused to improve the world of fun
                  and entertainment. Since inception, Atmegame.com prioritized
                  serving gamers without asking their age or gender. This means
                  that players can trust us when it comes to seeking unbiased
                  thrill and fun.
                </p>
                <Image
                  src={`${S3_IMAGE_PATH}/img/our-vision.svg`}
                  width={350}
                  height={350}
                  alt="Our vision"
                  className={styles.vision}
                  loading="lazy"
                  unoptimized={true}
                />
              </div>
            </div>
          </div>

          <div className={styles.miniContainer}>
            <div className={styles.joinPrograme}>
              <Image
                src={`https://www.atmegame.com/img/sign-up-image.svg`}
                width={120}
                height={120}
                alt="about us"
                title="About Us"
                priority
                unoptimized={true}
              />
              <div className={styles.joinTheFun}>
                <h2>Join the Fun</h2>
                <p>
                  Sign up with our website for free to avail of all the amazing
                  benefits of the registered players in the form of awards,
                  statistics, your own avatar, high scores and much more! Play
                  your desired game in your PC, Windows phone, Android phone,
                  iPhone to have fun on the go!
                </p>

                <Link
                  prefetch={false}
                  href="/contact-us"
                  className={styles.joinUsNow}
                >
                  JOIN NOW
                </Link>
              </div>
            </div>
          </div>

          <div className={`${styles.overview} ${styles.space}`}>
            <p>
              <i>
                We have given our best to get our website covered with multiple
                categories of free games to play and our website is constantly
                updated with new game tiles. Stay tuned with us to keep your
                mind fresh and learn something new daily!!
              </i>
            </p>
          </div>
        </div>
      </section>
    </CardContainer>
  );
}
