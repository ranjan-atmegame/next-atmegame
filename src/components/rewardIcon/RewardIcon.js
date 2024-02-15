"use client";
import Image from "next/image";
import { displayRewardAdX } from "@/api/rewardAd";
import { updateRewardCoins } from "@/api/game";
import styles from "./rewardIcon.module.css";
export default function RewardIcon({
  setDisplay,
  icon = "/img/freeCoins7.png",
}) {
  const handleRewardAd = () => {
    displayRewardAdX(() => {
      updateRewardCoins();
    });
    setDisplay();
  };
  return (
    <div className={`${styles.floatingIcon}`} onClick={handleRewardAd}>
      <Image
        src={icon}
        alt="free coins"
        title="free coins"
        height={76}
        width={76}
        priority={true}
        unoptimized={true}
      />
    </div>
  );
}
