import { useState } from "react";
import Link from "next/link";

import styles from "./tab.module.css";

const Tab = () => {
  const [tab, setTab] = useState("about");

  const handleLinks = (e) => {
    e.preventDefault();
    const tab = e.target.id;

    setTab(tab);
  };

  return (
    <section className={styles.tabContainer}>
      <ul>
        <li>
          <a id="about" className={styles.active} href="/games/ ">
            About
          </a>
        </li>
        <li>
          <a id="walkthrough" className="" href="/games/ ">
            Walkthrough
          </a>
        </li>
        <li>
          <a id="controls" className="" href="/games/ ">
            Controls
          </a>
        </li>
      </ul>
      <div className={styles.tabOneContent}>
        <div className={styles.headingAndWidgets}>
          <div className={styles.gameOtherWidgets}>
            <div className={styles.ratingWidget}>
              <div>
                <span>Rate this Game</span>
                <span className={styles.rate}>
                  <label for="star5" title="text">
                    5 stars
                  </label>
                  <label for="star4" title="text">
                    4 stars
                  </label>
                  <label for="star3" title="text">
                    3 stars
                  </label>
                  <label for="star2" title="text">
                    2 stars
                  </label>
                  <label for="star1" title="text">
                    1 star
                  </label>
                </span>
              </div>
              <div>
                <span> sssRating 3.6 (448)</span>
              </div>

              <div
                itemprop="aggregateRating"
                itemScope=""
                itemType="https://schema.org/AggregateRating"
              ></div>
            </div>
            <div className={styles.reportWidget}>
              <a href="/">
                <img
                  width="20"
                  height="20"
                  src="https://www.atmegame.com/img/icon-report.svg"
                  alt="Report"
                />
                Report
              </a>
            </div>
          </div>
          <h1>About Cricket Championships Game </h1>
        </div>
        <span itemprop="description">
          <div>
            Many cricket fans are already spending their good time here! Where
            are you guys? Join this brand new sports challenge and get a chance
            to enjoy the spirit of your favourite game in a completely unique
            style! The best part is that you can play Cricket Championship game
            for free anywhere anytime without download it in your device. You
            would definitely recommend it to your friends and families who are
            also as crazy for this sport as you are.
          </div>
          <div>
            <br />
          </div>
          <div>
            Choose your team out of multiple options and be prepared to
            represent your country with complete pride and honour! Once your
            team is finalized, make sure to select the over out of three options
            including 2, 5 and 10 overs. Get ready to beat multiple matches to
            qualify for your team for the quarterfinal! Guide your team in every
            match like a nice caption in semi-final and final and lead them
            until the most awaited victory comes in!
          </div>
          <div>
            <br />
          </div>
          <div>
            Pick specialist batsmen, fast bowlers, spinners, a wicketkeeper and
            set your match tactics to the deepest detail.
          </div>
          <div>
            <br />
          </div>
          <div>
            Follow the proper cricketing tactics and keep your eyes on the
            screen to avoid the missing of any ball to beat your competitor!
            Change your tactics to help your team win in this online cricket
            game! Play alone or invite your friends to make your fun time more
            interesting and challenging! Choose the team you want to win and get
            ready to dive into the pool of unlimited thrill and entertainment!
          </div>
        </span>
      </div>
    </section>
  );
};

export default Tab;
