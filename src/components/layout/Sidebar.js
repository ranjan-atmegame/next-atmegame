"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "@/components/ui/images/Icon";
import UserInfo from "./UserInfo";
import { authenticate, removeAuth } from "@/api/auth";
import { useEffect } from "react";
import { S3_IMAGE_PATH } from "@/utils/Constants";
import { removeItem } from "@/utils/LS";
import { IS_GAME_PLAYED, GAME_PLAYED_COUNT } from "@/utils/Constants";
export default function Sidebar({
  auth,
  setAuth,
  styles,
  closeSidebar,
  sidebarClass,
  overlayCls,
}) {
  const router = useRouter();

  useEffect(() => {
    const response = authenticate();
    setAuth(response);
  }, [sidebarClass]);

  const handleLogin = () => {
    router.push("/signin");
    closeSidebar();
  };

  const handleLogout = () => {
    closeSidebar();
    removeAuth();
    window.location.href = "/";
    removeItem(GAME_PLAYED_COUNT);
    removeItem(IS_GAME_PLAYED);
  };

  const closeSidebarOnClick = () => {
    closeSidebar();
  };

  if (!auth) {
    return "";
  }

  const { isSignedIn, user } = auth;
  const userDashboardJSX = () => {
    return (
      <>
        <h4>Dashboard</h4>
        <ul onClick={closeSidebarOnClick}>
          {isSignedIn && (
            <>
              <li>
                <Link href="/dashboard">
                  <Image
                    src={`${S3_IMAGE_PATH}/img/new-games-mobile-icon.svg`}
                    title=""
                    alt=""
                    width="24"
                    height="24"
                    unoptimized={true}
                  />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/user/profile">
                  <Image
                    src={`${S3_IMAGE_PATH}/img/profile-mobile-icon.svg`}
                    title=""
                    alt=""
                    width="24"
                    height="24"
                    unoptimized={true}
                  />
                  Profile
                </Link>
              </li>
              <li>
                <Link title="" href="/user/favourites">
                  <Image
                    src={`${S3_IMAGE_PATH}/img/favourite-mobile-icon.svg`}
                    title=""
                    alt=""
                    width="24"
                    height="24"
                    unoptimized={true}
                  />
                  Favourite
                </Link>
              </li>

              {/* <li>
                <Link title="" href="/user/friends">
                  <Image
                    src={`${S3_IMAGE_PATH}/img/friends-mobile-icon.svg`}
                    title=""
                    alt=""
                    width="24"
                    height="24"
                  />
                  Friends
                </Link>
              </li> */}
            </>
          )}
          <li>
            <Link title="" href="/user/coins-history">
              <Image
                src={`${S3_IMAGE_PATH}/img/coins-mobile-icon.svg`}
                title=""
                alt=""
                width="24"
                height="24"
                unoptimized={true}
              />
              Coins
              <span>{}</span>
            </Link>
          </li>
        </ul>
        <h4> </h4>
        <ul onClick={closeSidebarOnClick}>
          <li>
            <Link title="" href="">
              <Image
                src={`${S3_IMAGE_PATH}/img/notifications-mobile-icon.svg`}
                title=""
                alt=""
                width="24"
                height="24"
                unoptimized={true}
              />
              Notification
              <span>{}</span>
            </Link>
          </li>
          {isSignedIn && (
            <>
              <li>
                <Link title="" href="/leaderboard">
                  <Image
                    src={`${S3_IMAGE_PATH}/img/leaderboard-mobile-icon.svg`}
                    title=""
                    alt=""
                    width="24"
                    height="24"
                    unoptimized={true}
                  />
                  Leaderboard
                  <span>{}</span>
                </Link>
              </li>

              <li>
                <Link title="" href="/user/recommended-games">
                  <Image
                    src={`${S3_IMAGE_PATH}/img/recommended-mobile-icon.svg`}
                    title=""
                    alt=""
                    width="24"
                    height="24"
                    unoptimized={true}
                  />
                  Recommended Games
                  <span>{}</span>
                </Link>
              </li>

              <li>
                <Link title="" href="/user/games-played">
                  <Image
                    src={`${S3_IMAGE_PATH}/img/total-games-played-mobile-icon.svg`}
                    title=""
                    alt=""
                    width="24"
                    height="24"
                    unoptimized={true}
                  />
                  Total Games Played
                  <span>{}</span>
                </Link>
              </li>
              <li>
                <Link title="" href="/user/liked">
                  <Image
                    src={`${S3_IMAGE_PATH}/img/liked-mobile-icon.svg`}
                    title=""
                    alt=""
                    width="24"
                    height="24"
                    unoptimized={true}
                  />
                  Liked Games
                  <span>{}</span>
                </Link>
              </li>
              <li>
                <Link title="" href="/user/disliked">
                  <Image
                    src={`${S3_IMAGE_PATH}/img/disliked-mobile-icon.svg`}
                    title=""
                    alt=""
                    width="24"
                    height="24"
                    unoptimized={true}
                  />
                  Disliked Games
                  <span>{}</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </>
    );
  };

  return (
    <div className={`${styles.mobileLeftMenu} ${sidebarClass}`}>
      <div className={styles.menuItemContainer}>
        <div className={styles.profileBox}>
          <div className={styles.btnsCloseHome}>
            <Link href="/" className={styles.tigerIcon} onClick={closeSidebar}>
              <Image
                src="https://www.atmegame.com/img/logo-icon.png"
                title="Go to Home"
                alt="Go to Home"
                width="32"
                height="32"
                priority={false}
                unoptimized={true}
              />
            </Link>
            <div className={styles.close} onClick={closeSidebar}></div>
          </div>
          {auth && (
            <UserInfo auth={auth} handleLogin={handleLogin} styles={styles} />
          )}
        </div>

        {/* Dashboard */}
        {userDashboardJSX()}

        {/* Games */}
        <div className={styles.menuItems}>
          <h4>Games Categories</h4>
          <ul onClick={closeSidebarOnClick}>
            <li>
              <Link title="" href="/online-new-games">
                <Image
                  src="https://www.atmegame.com/img/new-games-mobile-icon.svg"
                  title=""
                  alt=""
                  width="24"
                  height="24"
                  unoptimized={true}
                />
                New Games
              </Link>
            </li>
            <li>
              <Link title="" href="/online-most-played-games">
                <Image
                  src="https://www.atmegame.com/img/new-games-mobile-icon.svg"
                  title=""
                  alt=""
                  width="24"
                  height="24"
                  unoptimized={true}
                />
                Most Played Games
              </Link>
            </li>
            <li>
              <Link title="" href="/online-cricket-games">
                <Image
                  src="https://www.atmegame.com/img/new-games-mobile-icon.svg"
                  title=""
                  alt=""
                  width="24"
                  height="24"
                  unoptimized={true}
                />
                Cricket Games
              </Link>
            </li>
          </ul>
          <h4>Connect with us</h4>
          <div className={`${styles.socialIcon} ${styles.mobileMenu}`}>
            <ul>
              <li>
                <Link
                  href="https://www.facebook.com/Atmegame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.fb}
                >
                  {/* Facebook{" "} */}
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/atmegame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.tw}
                >
                  {/* Twitter{" "} */}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/atmegame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.insta}
                >
                  {/* Instagram{" "} */}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/atmegame/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.in}
                >
                  {/* Linkedin{" "} */}
                </Link>
              </li>
              {/* <li>
                <Link
                  href="https://in.pinterest.com/atmegame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.pin}
                >
                  Pinterest{" "}
                </Link>
              </li> */}
            </ul>
            <ul>
              <li>
                {auth.isSignedIn && (
                  <button onClick={handleLogout} className={styles.logOut}>
                    <Image
                      width={24}
                      height={24}
                      src="/img/logout-mobile-icon.svg"
                      alt=""
                      unoptimized={true}
                    />
                    Logout
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${styles.menuOverlay} ${sidebarClass} ${overlayCls}`}
        onClick={closeSidebar}
      ></div>
    </div>
  );
}
