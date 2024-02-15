"use client";
import Link from "next/link";
import Icon from "../ui/images/Icon";
import { S3_IMAGE_PATH } from "@/utils/Constants";
import { useState, useEffect } from "react";
import { offlineCoin } from "@/utils/index";

export default function HeaderCoins({ userInfo, styles }) {
  const [auth, setAuth] = useState(userInfo);
  const coin =
    userInfo && userInfo.user && userInfo.user.coins ? userInfo.user.coins : 0;
  const [userCoins, setUserCoins] = useState(coin);

  useEffect(() => {
    setAuth(userInfo);
  }, [userInfo]);

  useEffect(() => {
    const coin = offlineCoin();
    setUserCoins(coin);
  }, []);

  return (
    <div className={styles.totalCoins}>
      <Link href={auth?.isSignedIn ? "/user/coins-history" : "/signin"}>
        <Icon
          src={`${S3_IMAGE_PATH}/img/coin-icon.png`}
          title="Coin"
          alt="Coin"
          width="24"
          height="24"
          priority={true}
        />
        <span>
          <span id="userCoin">{userCoins ? userCoins : 0}</span>
          {/* <span>Coins</span> */}
        </span>
      </Link>
    </div>
  );
}
