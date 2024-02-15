"use client";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import useCategoryGames from "@/hooks/useCategoryGames";
import CardShimmer from "../common/CardShimmer";
import Games from "./Games";
import Icon from "@/components/ui/images/Icon";
import { useEffect, useState } from "react";

export default function RenderedCategory({
  limitNum,
  catGames,
  mobile,
  getCatGamesCB,
  filter,
  updateStateInParent,
  noMoreCatGames,
  updateLimitInParent,
  lazy,
  category,
  relatedCategory,
  iconName = "",
}) {
  const [games, setGames] = useState(catGames.games);
  const { loadMoreRef, limit, setLimit } = useInfiniteScroll(limitNum, 30);
  const defaultLimit = 30;
  const [categoryGames, isLoading] = useCategoryGames(
    category._id,
    mobile,
    defaultLimit,
    limit,
    filter,
    updateStateInParent,
    noMoreCatGames,
    updateLimitInParent
  );

  useEffect(() => {
    setGames(catGames.games);
  }, [catGames && catGames.games]);

  useEffect(() => {
    if (
      categoryGames &&
      Array.isArray(categoryGames.games) &&
      categoryGames.games.length > 0
    ) {
      setGames([...games, ...categoryGames.games]);
    }
  }, [categoryGames]);

  useEffect(() => {
    setLimit(0);
  }, [filter]);

  return (
    <div>
      <Games
        games={games}
        category={category}
        slug={category.slug}
        isMobile={mobile}
        getCatGamesCB={getCatGamesCB}
        lazy={lazy}
        gameLoading={isLoading}
        relatedCategory={relatedCategory}
        iconName={iconName}
        categoryPage={true}
      />
      {noMoreCatGames && (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Icon
            width={175}
            height={110}
            src="/img/allFolks.png"
            alt="all folks"
          />
        </div>
      )}
      <div className="cat-loader" ref={loadMoreRef}></div>
    </div>
  );
}
