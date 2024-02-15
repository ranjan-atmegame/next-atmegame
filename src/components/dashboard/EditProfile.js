"use client";
import { useState, useEffect } from "react";
import { userProfile } from "@/api/user";
import EditProfilePage from "../ui/card/EditProfilePage";
import LeftMenu from "./LeftMenu";
import Stats from "./Stats";
import { authenticate } from "@/api/auth";
import styles from "./profile/dashboard.module.css";

export default function EditProfile({ auth: { token }, isMobile }) {
  const [auth, setAuth] = useState(null);
  const [games, setGames] = useState([]);
  const [updatedUser, setUpdatedUser] = useState();

  useEffect(() => {
    const { isSignedIn, token } = authenticate();
    userProfile(token).then((favourite) => {
      const authData = { isSignedIn, token, user: favourite };
      setAuth(authData);
      setGames(favourite);
    });
  }, []);

  const gameClass = isMobile ? "gameTwo" : "gameSix";

  function updateUserName(user){
    setUpdatedUser(user)
  }
  

  return (
    <section className={styles.dashboard}>
      <div className={styles.container}>
        <LeftMenu leftStyle={styles} auth={auth} pathname updatedUser={updatedUser}/>
        <div className={styles.dashboardRightContent}>
          <Stats styles={styles} user={auth?.user} />
          <div className={styles.contentSec}>
            <div className={`${styles.shadowCard} ${styles.fullSection}`}>
              <div className={styles.p16}>
                <EditProfilePage token={token} games={games} updateUserNameCB={updateUserName}
                  gameClass={gameClass}
                  numberOfGames={6}
                  priority={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
