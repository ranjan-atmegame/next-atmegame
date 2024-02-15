import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import RankList from "./RankList";
import { usersRank } from "@/api/user";
import styles from "@/components/dashboard/profile/dashboard.module.css";

export default function LeaderboardDetail({ token, showAllLink = true }) {
  const [users, setUsers] = useState([]);
  const [type, setType] = useState("today");

  const fetchRankByType = useCallback(() => {
    usersRank(token, type).then((result) => {
      setUsers(result);
    });
  }, [type, token]);

  useEffect(() => {
    fetchRankByType();
  }, [fetchRankByType]);

  const TYPES = { today: "Daily", week: "Weekly", month: "Monhly", all: "All" };
  const userRankJSX = users.map((user, index) => (
    <RankList key={user._id.email} user={user} rank={index + 1} />
  ));

  const handleRankType = (e, range) => {
    e.preventDefault();
    setType(range);
  };

  const leaderBoardType = () => {
    let status = "";
    return Object.keys(TYPES).map((range) => {
      status = type === range ? "active" : "";
      return (
        <li key={range}>
          <Link
            href=""
            onClick={(e) => handleRankType(e, range)}
            className={`${styles.status}`}
          >
            {TYPES[range]}
          </Link>
        </li>
      );
    });
  };

  return (
    <>
      <ul className={styles.leaderboardTabs}>{leaderBoardType()}</ul>
      {userRankJSX}
      {showAllLink && users.length > 0 && (
        <div className="">
          <Link href="/leaderboard" className={styles.btnFlat} title="">
            See All
          </Link>
        </div>
      )}
    </>
  );
}
