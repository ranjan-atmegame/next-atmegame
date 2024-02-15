import { useState } from "react";
import Link from "next/link";
import About from "./About";
import Walkthrough from "./Walkthrough";
import styles from "@/components/ui/tab/tab.module.css";

const Detail = ({ game, rating, auth, isMobile = true }) => {
  const [tab, setTab] = useState("about");
  const [isModal, setIsModal] = useState(false);

  const handleLinks = (e) => {
    e.preventDefault();
    const tab = e.target.id;
    setTab(tab);
  };

  const reportGame = (e) => {
    e.preventDefault();
    setIsModal(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setIsModal(false);
  };

  const getTabContent = () => {
    let content = "";
    switch (tab) {
      case "about":
        content = (
          <About
            game={game}
            styles={styles}
            rating={rating}
            auth={auth}
            isSignedIn={auth.isSignedIn}
            reportGame={reportGame}
            showModal={isModal}
            closeModal={closeModal}
          />
        );
        break;
      case "walkthrough":
        content = <Walkthrough game={game} />;
        break;
      case "controls":
        content = (
          <div className={styles.tabOneContent}>
            {isMobile ? game.mobileControlKeys : game.webControlKeys}
          </div>
        );
        break;
      default:
        content = "";
        break;
    }
    return content;
  };

  return (
    <section className={styles.tabContainer}>
      <ul>
        <li>
          <Link
            href=" "
            onClick={handleLinks}
            id="about"
            className={tab === "about" ? styles.active : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href=" "
            onClick={handleLinks}
            id="walkthrough"
            className={tab === "walkthrough" ? styles.active : ""}
          >
            Walkthrough
          </Link>
        </li>
        <li>
          <Link
            href=" "
            onClick={handleLinks}
            id="controls"
            className={tab === "controls" ? styles.active : ""}
          >
            Controls
          </Link>
        </li>
      </ul>
      {getTabContent()}
    </section>
  );
};

export default Detail;
