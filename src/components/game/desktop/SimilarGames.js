"use client";
import { useState, useEffect } from "react";
import { getSimilarGames } from "@/api/game";
import CardContainer from "@/components/ui/card/CardContainer";
import CarouselWithScroll from "@/components/common/CarouselWithScroll";

export default function SimilarGames({
  categoryId,
  subCategoryId,
  displayGames = 8,
}) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getSimilarGames(categoryId, subCategoryId).then((games) => {
      setGames(games);
    });
  }, [categoryId, subCategoryId]);

  if (games.length === 0) {
    return null;
  }

  return (
    <CardContainer>
      <CarouselWithScroll
        items={games}
        title="Similar Games"
        gameClass="gameSeven"
        itemsToShow={displayGames}
        slug={""}
        cardColor="similarGame"
        cardHead={false}
      />
    </CardContainer>
  );
}
