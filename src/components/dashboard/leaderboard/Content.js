import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usersRank } from "@/api/user";
import UserRankItem from "./UserRankItem";
// import Pagination from "@/components/ui/pagination";

export default function Content({ token, styles, isPagination = false }) {
  const [type, setType] = useState("today");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    recordPerPage: 10,
    currentPage: 1,
    skip: 0,
  });

  const { recordPerPage, skip } = values;
  const fetchRankByType = useCallback(() => {
    usersRank(token, type, skip, recordPerPage).then((users) => {
      setLoading(false);
      setUsers(users);
    });
  }, [type, token, recordPerPage, skip]);

  useEffect(() => {
    setLoading(true);
    fetchRankByType();
  }, [fetchRankByType]);

  const onPaginate = async (currentPage) => {
    let skip = (currentPage - 1) * values.recordPerPage;
    setValues({ ...values, skip, currentPage });

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  };

  const handleRankType = (e, range) => {
    e.preventDefault();
    setValues({ ...values, skip: 0, currentPage: 1 });
    setType(range);
  };

  const listUsers = () => {
    return users.map((user, index) => (
      <UserRankItem
        key={user._id.email}
        user={user}
        rank={values.currentPage * 10 + index - 9}
        styles={styles}
      />
    ));
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
            prefetch={false}
            href=""
            onClick={(e) => handleRankType(e, range)}
            className={`${styles[status]}`}
          >
            {TYPES[range]}
          </Link>
        </li>
      );
    });
  };

  return (
    <div className={styles.leaderBoard}>
      <div className={styles.coinsBox}>
        {/* <h3>
          <i className={styles.coins}></i> Coins
        </h3> */}
        <ul className={styles.leaderboardTabs}>{leaderBoardType()}</ul>

        {loading && <div>Loading...</div>}
        {users && listUsers()}

        {/* {isPagination && users && (
          <Pagination
            totalGames={500}
            paginate={onPaginate}
            gamesPerPage={values.recordPerPage}
            currentPage={values.currentPage}
          />
        )} */}
      </div>
    </div>
  );
}
