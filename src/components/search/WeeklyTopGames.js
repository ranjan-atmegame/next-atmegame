import { useEffect, useState } from "react";
import Slider from "../common/Slider";
import styles from "./weeklyTopGame.module.css";
import { topWeeklyGamesSearch } from "@/api/search";
import { setItem, getItem } from "@/utils/LS";

export default function WeeklyTopGames({
  isMobile,
  hideSearchPopupCB,
  noResult = false,
  cls = "",
}) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (noResult) {
      let res = getItem("topWeeklyGames");
      setGames(res);
    } else {
      topGames();
    }
  }, [noResult]);

  async function topGames() {
    const data = await topWeeklyGamesSearch();
    setGames(data?.result);
    setItem("topWeeklyGames", data?.result);
  }

  if (Object.keys(games).length !== 0) {
    return (
      <div className={`${styles.weeklyTopGame} ${styles[cls]}`}>
        <Slider
          games={games}
          className={`${styles.draggable}`}
          isMobile={isMobile}
          heading={"Top Weekly Games"}
          hideSearchPopupCB={hideSearchPopupCB}
        />
      </div>
    );
  } else return null;
}
