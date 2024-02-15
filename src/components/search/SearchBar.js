"use client";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { gameSearchByTerm } from "../../api/search";
import styles from "./searchbar.module.css";
import Item from "./Item";
import { SLIDES_IMG_PATH, IMAGE_PATH_NEW } from "@/utils/Constants";
import Shimmer from "@/components/common/shimmer/Shimmer";
import WeeklyTopGames from "./WeeklyTopGames";
import useDevice from "@/hooks/useDevice";
import Image from "next/image";

export default function SearchBar({
  hideSearchPopupCB,
  handleSrch,
  getCategoryCB
 }) {
  const [value, setValue] = useState("");
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showList, setShowList] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const [arrowClicked, setArrowClicked] = useState(false);
  const [margin, setMargin] = useState('120px');
  let debounceText = useDebounce(value, 100);
  const [mobile] = useDevice();
  const device = mobile ? "mobile" : "desktop";

  function handleSearch(e) {
    let searchedText = e.target.value;
    if (searchedText?.length > 0) {
      setValue(searchedText);
      setShowList(searchedText?.length > 1);
      setLoading(searchedText?.length > 1);
    } else resetSearch(e);
    if (typeof handleSrch === "function") {
      handleSrch(searchedText?.length > 1 ? false : true);
    }
  }

  function handleKeyUp(e) {
    if (e.key === "Backspace" && e.target.value.length < 1) {
      resetSearch(e);
    }
    const endPoint = e.target.value.replace(/\s+/g, "-");
    let url = `/search/${endPoint}`;

    if (!arrowClicked && e.target.value.length > 1 && e.key === "Enter") {
      window.location.href = url;
    }
    handleArrowEffect(e);
  }

  function handleArrowEffect(e) {
    if (games && games.length > 0) {
      if (e.keyCode === 38 && currentItem > 0) {
        setCurrentItem(currentItem - 1);
        setArrowClicked(true);
      } else if (e.keyCode === 40 && currentItem < games.length - 1) {
        setCurrentItem(currentItem + 1);
        setArrowClicked(true);
      }
      if (e.key === "Enter") {
        const data = games[currentItem];
        let slug = data.icon
          ? `/online-${data.slug}-games`
          : `/games/${data.slug}`;
        window.location.href = slug;
      }
    }
  }

  useEffect(() => {
    if (debounceText && debounceText.length > 1) {
      getSearchList(debounceText);
    }
  }, [debounceText]);

  function resetSearch(e) {
    setLoading(false);
    setShowList(false);
    debounceText = "";
    e.target.value = "";
    setValue("");
    games.length = 0;
    setGames(games);
    if (typeof handleSrch === "function") {
      handleSrch(true);
    }
    if (typeof getCategoryCB === "function") {
      getCategoryCB([], "", true)
      setMargin('120px');
    }
  }

  const closeSearchBar = (e) => {
    e.preventDefault();
    if (typeof hideSearchPopupCB === "function") {
      hideSearchPopupCB();
    }
  };

  async function getSearchList(searchedKey) {
    const { status, result } = await gameSearchByTerm(searchedKey);
    if (status !== "success") {
      setLoading(false);
      console.log("Could not fetch data");
    } else {
      // let res = [...result.category, ...result.games];
      setLoading(false);
      setGames(result.games);
      let isGameAvailable = result.games?.length > 0;
      let flag = isGameAvailable ? result.category.length == 0 ? false : true : false
      setMargin(flag ? '120px' : '20px');
      if (typeof getCategoryCB === "function") {
        getCategoryCB(result.category, isGameAvailable)
      }
    }
  }

  function serchResult() {
    if (loading) {
      return <div style={{ marginTop: margin }}><Shimmer type="search" /></div>
    } else {
      return (
        showList &&
        (games && Array.isArray(games) && games.length > 0 ? (
          <div className={styles.resultList} style={{ marginTop: margin }}>
            <ul>
              {games.map((item, i) => {
                let image = item.icon
                  ? `${IMAGE_PATH_NEW}cat/${item.name.toLowerCase()}.png`
                  : `${SLIDES_IMG_PATH}${device}/${item.image}_slide.jpg`;
                let slug = item.icon
                  ? `/online-${item.slug}-games`
                  : `/games/${item.slug}`;
                const cls = currentItem === i ? "active" : "";
                return (
                  <Item
                    key={i + item.name}
                    name={item.name}
                    hideSearchPopupCB={hideSearchPopupCB}
                    slug={slug}
                    title={item.name}
                    height={45}
                    width={60}
                    icon={image}
                    currentItem={currentItem}
                    cls={cls}
                    styles={styles}
                  />
                );
              })}
            </ul>
          </div>
        ) : (
          <>
            <div className={styles.noResultFound}>
              <Image
                width="150"
                height="110"
                src="/img/error_404.svg"
                onClick={closeSearchBar}
              />
              <h3>No Result Found!</h3>
              <p>Try searching for something else?</p>
            </div>
            <div>
              <WeeklyTopGames noResult={true} cls="noResultTopWeekly" />
            </div>
          </>
        ))
      );
    }
  }


  return (
    <>
      <div className={styles.searchMain}>
        <div className={styles.searchLists}>
          <div className={styles.search}>
            <Image
              className={styles.backIcon}
              width="30"
              height="30"
              src="/img/backArrowWhite.svg"
              onClick={closeSearchBar}
            />
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search Game..."
              value={value}
              onChange={(e) => handleSearch(e)}
              onKeyUp={(e) => handleKeyUp(e)}
            />
            <Image
              className={styles.resetSearch}
              width="14"
              height="14"
              src="/img/closeLight.svg"
              onClick={resetSearch}
            />
          </div>

          {serchResult()}
        </div>
      </div>
      <div className={styles.overlay} onClick={closeSearchBar}></div>
    </>
  );
}
