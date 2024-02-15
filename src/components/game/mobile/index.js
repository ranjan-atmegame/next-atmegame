"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Ad from "@/components/ad";
import Game from "./Game";
import Play from "./Play";
import GameInfo from "./GameInfo";
import QuickPlay from "@/components/ui/quickPlay/quickPlay";
import { isValidUrl } from "@/utils";
import SimilarGames from "../desktop/SimilarGames";

export default function Mobile({
  game,
  category,
  subCategory,
  rating,
  handle,
  onGamePlay,
  coin,
}) {
  const [hasHash, setHasHash] = useState(false);
  const [gameFound, setGameFound] = useState(true);
  const router = useRouter();
  const { script } = game;

  const handleHash = () => {
    setHasHash(false);
    router.push(`/games/${game.slug}`);
  };

  useEffect(() => {
    window.addEventListener("popstate", handleHash);
    return () => window.removeEventListener("popstate", handleHash);
  }, [hasHash]);

  const handleMobilePlay = async (e) => {
    e.preventDefault();
    if (typeof onGamePlay === "function") {
      onGamePlay(game._id);
    }
    setHasHash(true);
    router.push(`/games/${game.slug}#fullscreen`);
    setTimeout(async () => {
      await handle.enter(e);
    }, 100);
  };

  useEffect(() => {
    const isCDN = script.indexOf("cdn.") !== -1;
    if (!isCDN && !isValidUrl(script)) {
      setGameFound(false);
    }
    setHasHash(window.location.hash);
  }, [script]);

  return (
    <>
      {game &&
        (!hasHash ? (
          <Game
            game={game}
            onGamePlay={handleMobilePlay}
            handle={handle}
            coin={coin}
          />
        ) : (
          <Play
            game={game}
            handle={handle}
            hasHash={hasHash}
            coin={coin}
            slug={game.slug}
            setHasHash={setHasHash}
          />
        ))}

      {category?._id && (
        <SimilarGames
          categoryId={category._id}
          subCategoryId={subCategory?._id}
          displayGames={3}
        />
      )}

      <Ad cardColor="whiteAd" responsiveAd={true} />

      <GameInfo game={game} rating={rating} />

      {gameFound && <QuickPlay game={game} onGamePlay={handleMobilePlay} />}
    </>
  );
}
