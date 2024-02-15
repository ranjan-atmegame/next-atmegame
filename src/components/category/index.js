"use client";
import { useEffect, useState } from "react";
import { getCategoryGames, fetchGameRelatedCategory } from "@/api/category";
import RenderedCategory from "./RenderedCategory";
import useDevice from "@/hooks/useDevice";
import Shimmer_double_Row from "../common/shimmer/shimmer_double_Row";

export default function Category({ category, isMobile }) {
  const [filter, setFilter] = useState("new");
  const [limit, setLimit] = useState(0);
  const [relatedCategory, setRelatedCategory] = useState([]);
  const [catGames, setCatGames] = useState({ games: [], totalCount: 0 });
  const [noMoreCatGames, setNoMoreCatGames] = useState(false);
  const [mobile] = useDevice();

  useEffect(() => {
    getCatGames("new");
    getRelatedCategory();
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  }, []);

  async function getRelatedCategory() {
    const response = await fetchGameRelatedCategory(category._id);
    if (response.status !== "success") {
      return setRelatedCategory([]);
    }
    setRelatedCategory(response.result);
  }

  async function getCatGames(filter, cb) {
    const limit = 32;
    const skip = 0;
    const resp = await getCategoryGames(
      category._id,
      isMobile,
      limit,
      skip,
      filter
    );

    setCatGames(resp);
    setFilter(filter);
    setLimit(0);
    setNoMoreCatGames(resp?.games?.length < 32 ? true : false);
    if (typeof cb === "function") {
      cb(resp && true);
    }
  }

  function updateState(flag) {
    setNoMoreCatGames(flag);
  }

  function updateLimitInParent(val) {
    setLimit(val);
  }

  if (catGames.games.length) {
    return (
      <>
        <RenderedCategory
          limitNum={limit}
          catGames={catGames}
          mobile={mobile}
          getCatGamesCB={getCatGames}
          filter={filter}
          updateStateInParent={updateState}
          noMoreCatGames={noMoreCatGames}
          updateLimitInParent={updateLimitInParent}
          lazy="lazy"
          category={category}
          relatedCategory={relatedCategory}
          iconName="similarGames"
        />
      </>
    );
  } else {
    return (
      <>
        <Shimmer_double_Row gameTitle="game" />
      </>
    );
  }
}
