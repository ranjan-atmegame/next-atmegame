"use client";
import { useState } from "react";
import Game from "./Game";
import Ad from "@/components/ad";
import CardContainer from "@/components/ui/card/CardContainer";
import GameInfo from "./GameInfo";
import GameThumbnail from "./GameThumbnail";
import SimilarGames from "./SimilarGames";

export default function Desktop({
  game,
  category,
  subCategory,
  rating,
  handle,
  onGamePlay,
  coin,
}) {
  const [gameLoaded, setGameLoaded] = useState(false);

  function loadGames(e) {
    setGameLoaded(true);
    if (typeof onGamePlay === "function") {
      onGamePlay();
    }
    fullscreenActive(e);
  }

  function fullscreenActive(e) {
    setTimeout(() => {
      handle.enter(e);
    }, 10);
  }

  return (
    <>
      {gameLoaded ? (
        <Game game={game} handle={handle} coin={coin} />
      ) : (
        <GameThumbnail
          game={game}
          handle={handle}
          loadGames={loadGames}
          coin={coin}
        />
      )}

      {category?._id && (
        <SimilarGames
          categoryId={category._id}
          subCategoryId={subCategory?._id}
        />
      )}

      <CardContainer isContainerStyle={true}>
        <Ad cardColor="noShadow" responsiveAd={true} />
      </CardContainer>

      <GameInfo game={game} rating={rating} />
    </>
  );
}
