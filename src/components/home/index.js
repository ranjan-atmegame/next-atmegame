"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import useScroll from "@/hooks/useScroll";
import Description from "@/components/home/Description";
import RewardIcon from "../rewardIcon/RewardIcon";
import { useRouter } from "next/navigation";
import { subscribe } from "../notification/subscriber";

const C = dynamic(() => import("./C"));
const E = dynamic(() => import("./E"));
const G = dynamic(() => import("./G"));
const H = dynamic(() => import("./H"));

export default function Home({ isMobile }) {
  const offset = useScroll({
    size: 100,
    interval: 1,
    totalCount: 4,
  });
  const [state, setState] = useState([]);
  const [displayReward, setDisplayReward] = useState(true);

  const router = useRouter();
  const handleDisplayReward = () => {
    setDisplayReward(false);
    // router.refresh();
  };

  useEffect(() => {
    if ("serviceWorker" in navigator)
      window.addEventListener("load", () =>
        navigator.serviceWorker.register("/firebase-messaging-sw.js").then(
          (registration) =>
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            ),
          (err) => console.log("Service Worker registration failed: ", err)
        )
      );

    subscribe();
  }, []);

  useEffect(() => {
    // window.scrollTo(0, 0);
    if (offset) {
      const rowNameArr = ["c", "e", "g", "h"];
      const newState = rowNameArr.slice(0, offset);
      setState(newState);
    }
  }, [offset]);

  return (
    <>
      <p></p>
      {state.includes("c") && <C isMobile={isMobile} />}
      {state.includes("g") && <G isMobile={isMobile} />}
      {state.includes("e") && <E isMobile={isMobile} />}
      {state.includes("h") && <H isMobile={isMobile} />}
      <Description />
      {displayReward && <RewardIcon setDisplay={handleDisplayReward} />}
    </>
  );
}
