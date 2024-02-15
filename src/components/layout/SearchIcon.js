"use client";
import SearchList from "../search/index";
import { useEffect, useState } from "react";
import { S3_IMAGE_PATH } from "@/utils/Constants";
import Icon from "../ui/images/Icon";
import styles from "./header.module.css";

export default function SearchIcon() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  
  const showSearchBarPopup = () => {
    setShowSearchBar(true);
    document.body.classList.add('overflowHidden');
  };

  const hideSearchBarPopup = () => {
    setShowSearchBar(false);
    document.body.classList.remove('overflowHidden');
  };

  return (
    <>
      <div className={styles.searchIc} onClick={showSearchBarPopup}>
        <Icon
          src={`/img/search_white.svg`}
          title="Search Game"
          alt="Search Game"
          width="20"
          height="20"
          priority={true}
        />
      </div>

      {showSearchBar && <SearchList hideSearchPopupCB={hideSearchBarPopup} />}
    </>
  );
}
