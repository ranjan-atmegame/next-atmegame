import Link from "next/link";
import Icon from "../ui/images/Icon";
import { S3_IMAGE_PATH } from "@/utils/Constants";
import SearchIcon from "./SearchIcon";
import HamburgerMenu from "./HamburgerMenu";
import styles from "./header.module.css";
import HeaderCoins from "./HeaderCoins";
import { getAuth, getDevice } from "@/app/server";
import HeaderLoginComp from "./HeaderLoginComp";

export default function Header() {
  const userInfo = getAuth();
  const mobile = getDevice();

  return (
    <header className={`${styles.header}`}>
      <div className={styles.container}>
        <div className={styles.logoSec}>
          {mobile && (
            <HamburgerMenu
              icon="/img/hamburger.svg"
              styles={styles}
              title="Left menu"
              userInfo={userInfo}
            />
          )}
          <Link
            className={styles.logoLink}
            href="/"
            title="Play Online Free Games - AtmeGame"
            id="logo"
          >
            <Icon
              height="32"
              width="210"
              className={styles.logo}
              src={`${S3_IMAGE_PATH}/logo.png`}
              priority={true}
              alt="Play Online Free Games - AtmeGame"
              title="Play Online Free Games - AtmeGame"
              lazy={undefined}
            />
          </Link>
        </div>
        <div className={styles.rightHeader}>
          <div className={styles.searchResults}>
            <SearchIcon />
          </div>
          <Link title="" className={styles.notificationIcon} href="">
            <Icon
              src={`${S3_IMAGE_PATH}/img/notification-icon.svg`}
              title="Notification"
              alt="Notification"
              height="21"
              width="17"
              priority={true}
            />
          </Link>
          <HeaderLoginComp styles={styles} userInfo={userInfo} />

          <HeaderCoins styles={styles} userInfo={userInfo} />
        </div>
      </div>
    </header>
  );
}
