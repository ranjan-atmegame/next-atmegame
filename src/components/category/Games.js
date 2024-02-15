"use client";
import { useState } from "react";
import Card from "@/components/ui/card/Card";
import CardHeader from "@/components/ui/card/CardHeader";
import Content from "@/components/ui/card/Content";
import CardContainer from "@/components/ui/card/CardContainer";
import CardShimmer from "@/components/common/CardShimmer";

const FILTER = [
  { name: "New Games", value: "new" },
  { name: "Top Rated", value: "manualRating" },
  { name: "Top Liked", value: "likes" },
  { name: "Top Played", value: "totalPlayed" },
];

export default function Games({
  isMobile,
  games,
  category,
  children,
  getCatGamesCB,
  lazy,
  gameLoading,
  relatedCategory,
  iconName = "",
  categoryPage,
}) {
  const [state, setState] = useState({
    filter: "new",
    loading: false,
  });

  const gameClass = isMobile ? "gameTwo" : "gameSix";

  function hanldeFilterGames(e) {
    e.preventDefault();
    const value = e.target.value;
    setState((prev) => ({ ...prev, loading: true, filter: value }));
    if (typeof getCatGamesCB === "function") {
      getCatGamesCB(value, function (dataRecieved) {
        if (dataRecieved) {
          setState((prev) => ({ ...prev, loading: false }));
        }
      });
    }
  }

  return (
    <>
      <CardContainer
        isContainerStyle={true}
        header={
          <CardHeader
            slug={category?.slug}
            title={`${category?.name} Games`}
            isMoreBtn={false}
            showFilter={true}
            iconName={category?.slug}
          >
            <select
              value={state.filter}
              onChange={(e) => hanldeFilterGames(e)}
              aria-label="Filter"
            >
              {FILTER.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </CardHeader>
        }
      >
        <Card cardWidth="w100" cardColor="noShadow">
          {state.loading ? <CardShimmer />
            :
            <Content
              games={games}
              numberOfGames={games.length}
              gameClass={gameClass}
              lazy={lazy}
              gameCategory={relatedCategory}
              iconName={iconName}
              categoryPage={categoryPage}
            />}
          {gameLoading && <CardShimmer />}
        </Card>
      </CardContainer>
      {children}
    </>
  );
}
