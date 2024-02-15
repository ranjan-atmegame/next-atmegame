"use client";
import { useState } from "react";
import Link from "next/link";
import Icon from "../ui/images/Icon";
import { S3_IMAGE_PATH } from "@/utils/Constants";
import SearchIcon from "./SearchIcon";
import Sidebar from "./Sidebar";
import styles from "./header.module.css";
// import { signOut } from "next-auth/react";

export default function Header() {
  const [displaySidebar, setDisplaySidebar] = useState(false);

  const handleSidebar = (e) => {
    e.preventDefault();
    setDisplaySidebar((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setDisplaySidebar(false);
  };

  return (
    <header className={`${styles.header}`}>
      <div className={styles.container}>
        <div className={styles.logoSec}>
          <Link
            className={styles.menuIcon}
            title="Left menu"
            href="/"
            onClick={handleSidebar}
          >
            <Icon
              src={`/img/hamburger.svg`}
              title="left side bar"
              width="36"
              height="24"
              priority={true}
            />
          </Link>

          <Link className={styles.logoLink} href="/">
            <Icon
              height="32"
              width="210"
              className={styles.logo}
              title="logo"
              src={`${S3_IMAGE_PATH}/logo.png`}
              priority={true}
            />
          </Link>
        </div>
        <div className={styles.rightHeader}>
          <div className={styles.searchResults}>
            <SearchIcon />
          </div>
          <Link title="" className={styles.notificationIcon} href="/">
            <Icon
              src={`${S3_IMAGE_PATH}/img/notification-icon.svg`}
              title="Notification"
              alt="Notification"
              height="21"
              width="17"
              priority={true}
            />
          </Link>
          <div className={styles.totalCoins}>
            <Link href={"/signin"}>
              <Icon
                src={`${S3_IMAGE_PATH}/img/coin-icon.png`}
                title="Coin"
                alt="Coin"
                width="24"
                height="24"
                priority={true}
              />
              <span>
                0<span>Coins</span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Sidebar
        styles={styles}
        closeSidebar={closeSidebar}
        sidebarClass={displaySidebar ? styles.show : "hide"}
      />
    </header>
  );
}
