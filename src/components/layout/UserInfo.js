"use client";
import { getUserImage } from "@/utils";
import { useEffect, useState } from "react";
import { offlineCoin } from "@/utils/index";
import { authenticate } from "@/api/auth";
import Icon from "@/components/ui/images/Icon";

export default function UserInfo({
  auth,
  handleLogin,
  styles,
}) {



  const { isSignedIn, user } = auth;
  if (user == null) return null;
  const coin = user && user.coins ? user.coins : 0;

  const [userCoins, setUserCoins] = useState(coin);
  const [userName, setUserName] = useState();
  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    const { user } = authenticate();
    updateUserData(user);
  }, [user]);

  function updateUserData(user) {
    const { nickName, firstName, lastName, avtar, gender } = user;
    const userImage = getUserImage(avtar, gender);
    if (firstName) {
      let name = `${firstName} ${lastName}`;
      setUserName(name)
    } else if (nickName) {
      setUserName(nickName)
    } else {
      setUserName(user.userName)
    }
    setUserImage(userImage)
  }


  useEffect(() => {
    const coin = offlineCoin();
    setUserCoins(coin);
  }, []);

  return (
    <>
      <div className={styles.profilePic}>
        <div className={styles.online}></div>
        {userImage && <Icon
          src={userImage}
          title="Profile pic"
          alt="Profile pic"
          width="58"
          height="58"
        />}
      </div>
      <div>
        <h2 id="humbergerUserName">{userName}</h2>
        {!isSignedIn && (
          <button onClick={handleLogin} className={styles.loginSm}>
            Login
          </button>
        )}
        <p>
          <span>
            <strong>#{user.rank}</strong>
            <span> Rank</span>
          </span>
          <span>
            <strong id="userCoin">{userCoins}</strong>
            <span> Coins</span>
          </span>
        </p>
      </div>
    </>
  );
}
