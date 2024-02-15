"use client";
import { useState } from "react";
import SearchBar from "./SearchBar";
import SubCategory from "./SubCategory";
import WeeklyTopGames from "./WeeklyTopGames";
import styles from "./searchbar.module.css";
import { isMobile } from "react-device-detect";

export default function SearchList({ hideSearchPopupCB }) {
  const [toogleSubCat, setToogleSubCat] = useState(true);
  const [category, setCateGory] = useState([]);
  const [toggleCat, setToggleCat] = useState(true);

  function handleSrch(flag) {
    setToogleSubCat(flag);
  }

  function getCategory(cat, isGameAvailable, clearFiledFlag) {
    setCateGory(cat);
    let flag = isGameAvailable ? cat.length == 0 ? false : true : false
    setToggleCat(flag);
    if (typeof clearFiledFlag !== "undefined") {
      setToggleCat(clearFiledFlag);
    }
  }


  return (
    <div className={styles.searchMain}>
      <div className={styles.searchLists}>
        <SearchBar
          hideSearchPopupCB={hideSearchPopupCB}
          handleSrch={handleSrch}
          getCategoryCB={getCategory}
        />
        {toggleCat && <SubCategory
          hideSearchPopupCB={hideSearchPopupCB}
          isMobile={isMobile}
          categoryList={toogleSubCat ? [] : category}
        />}
        {toogleSubCat ? (
          <>
            <WeeklyTopGames
              hideSearchPopupCB={hideSearchPopupCB}
              isMobile={isMobile}
            />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
