"use client";
import { useState, useEffect, useCallback } from "react";
import { usersRank } from "@/api/user";
import Link from "next/link";
// import Content from "../leaderboard/Content";
import UserRankItem from "../leaderboard/UserRankItem";
import styles from "@/components/dashboard/profile/dashboard.module.css";

export default function Leaderboard({ auth: { token } }) {
  const [type, setType] = useState("today");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRankByType = useCallback(() => {
    usersRank(token, type).then((users) => {
      setLoading(false);
      const userList = users.lenght >= 5 ? users.slice(0, 5) : users;
      setUsers(userList);
    });
  }, [type, token]);

  useEffect(() => {
    setLoading(true);
    fetchRankByType();
  }, [fetchRankByType]);

  const handleRankType = (e, range) => {
    e.preventDefault();
    setType(range);
  };

  const leaderBoardType = () => {
    const TYPES = {
      today: "Daily",
      week: "Weekly",
      month: "Monhly",
      all: "All",
    };
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

  const listUsers = () => {
    return users.map((user, index) => (
      <UserRankItem
        key={user._id.email}
        user={user}
        rank={10 + index - 9}
        styles={styles}
      />
    ));
  };

  return (
    <div className={`${styles.shadowCard} ${styles.mT16}`}>
      <div className={styles.leaderBoard}>
        <div className={`${styles.coinsBox} ${styles.smallBoxes}`}>
          <h3>
            <i className={styles.coins}></i> Leaderboard
          </h3>
          {/* {auth && <Content token={auth.token} styles={styles} />} */}
          <ul className={styles.leaderboardTabs}>{leaderBoardType()}</ul>

          {listUsers()}

          <div className="">
            <Link className={styles.btnFlat} title="" href="/leaderboard">
              See All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
