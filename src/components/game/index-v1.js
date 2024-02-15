"use client";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useFullScreenHandle } from "react-full-screen";
import {
  addTransaction,
  findGameBySlug,
  gamePlayed,
  fetchMoreGameByCategoryId,
} from "@/api/game";
import Breadcrumb from "./Breadcrumb";
import Desktop from "./desktop";
import Mobile from "./mobile";
import { authenticate, saveAuth } from "@/api/auth";
import useDevice from "@/hooks/useDevice";
import MoreGame from "@/components/game/MoreGame";
import Shimmer from "@/components/common/shimmer/Shimmer";
import FloatButton from "@/utils/FloatButton";

import { setItem, getItem, setItemWithExpiry } from "@/utils/LS";
import {
  GAME_PLAYED_COINS,
  IS_GAME_PLAYED,
  GAME_PLAYED_COUNT,
} from "@/utils/Constants";
import Shimmer_gameCard from "../common/shimmer/shimmer_gameCard";
import Shimmer_singleRow_container from "../common/shimmer/shimmer_singleRow_container";

export default function Game({ isMobile }) {
  const [state, setState] = useState();
  const [coins, setCoins] = useState(10);

  const [limit, setLimit] = useState(0);
  const [moreGames, setMoreGames] = useState({});
  const [noMoreCatGames, setNoMoreCatGames] = useState(false);

  const params = useParams();
  const handle = useFullScreenHandle();
  const [mobile] = useDevice();

  const slug = params.game;
  const CREDIT = 1;

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  }, []);

  useEffect(() => {
    gameBySlug(slug);
  }, [slug]);

  useEffect(() => {
    getCatGames();
  }, [state?.category?._id]);

  async function getCatGames() {
    if (typeof state !== "undefined" && state?.category?._id) {
      const catId = state?.category?._id;
      const resp = await fetchMoreGameByCategoryId(catId);
      setMoreGames(resp?.games);
    }
  }

  function updateStateInParent(flag) {
    setNoMoreCatGames(flag);
  }

  let gamePlayedCount =
    typeof window !== "undefined" && getItem(GAME_PLAYED_COUNT);
  useEffect(() => {
    const coins =
      gamePlayedCount < 10
        ? gamePlayedCount
          ? (gamePlayedCount + 1) * GAME_PLAYED_COINS
          : GAME_PLAYED_COINS
        : 100;
    setCoins(coins);
  }, [gamePlayedCount]);

  const gameBySlug = useCallback(async () => {
    const response = await findGameBySlug(slug, mobile);
    let data = response && response.result ? response.result : [];
    setState(data);
  }, [slug]);

  const onGamePlay = async () => {
    //add game to user played list
    // await updateUserCoins();
    await Promise.all([updateUserCoins(), updateGamePlayed()]);
  };

  const updateGamePlayed = async () => {
    let { isSignedIn, user } = authenticate();
    if (isSignedIn && user.totalPlayed.indexOf(state.game._id) === -1) {
      return await gamePlayed(state.game._id, { userId: user._id });
    } else {
      //update guest
    }
  };

  const updateUserCoins = async () => {
    let { isSignedIn, user, token } = authenticate();
    const { game } = state;
    const coins = calculateCoins();
    setCoins(coins);
    const transaction = {
      name: game.name,
      coins: coins,
      transaction: CREDIT,
      image: game.image,
    };
    if (isSignedIn) {
      return addTransaction(user._id, transaction, token).then((user) => {
        saveAuth({ isSignedIn, token, user });
        var elements = document.querySelectorAll('[id="userCoin"]');
        for (var i = 0; i < elements.length; i++) {
          elements[i].innerHTML = user && user.coins;
        }
        return user;
      });
    } else {
      user = {
        ...user,
        transactions: [...user.transactions, transaction],
        coins: user.coins + coins,
      };
      saveAuth({ isSignedIn, user });
    }

    var elements = document.querySelectorAll('[id="userCoin"]');
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = user && user.coins;
    }
  };

  const calculateCoins = () => {
    let isGamePlayed = getItem(IS_GAME_PLAYED);
    let gamePlayedCount = getItem(GAME_PLAYED_COUNT);
    if (!isGamePlayed) {
      gamePlayedCount = 1;
      setItemWithExpiry(IS_GAME_PLAYED, true, 24 * 3600);
      setItem(GAME_PLAYED_COUNT, gamePlayedCount);
    } else if (gamePlayedCount <= 9) {
      gamePlayedCount = gamePlayedCount + 1;
      setItem(GAME_PLAYED_COUNT, gamePlayedCount);
    }
    const coins = gamePlayedCount * GAME_PLAYED_COINS;
    return coins;
  };

  if (typeof state !== "undefined" && Object.keys(state).length !== 0) {
    return (
      <>
        <Breadcrumb
          category={state?.category}
          subCategory={state?.subCategory}
          game={state?.game}
        />

        <div itemScope="" itemType="https://schema.org/Game">
          {!isMobile && (
            <Desktop
              game={state?.game}
              category={state?.category}
              rating={state?.rating}
              mostPlayed={state?.mostPlayed}
              handle={handle}
              onGamePlay={onGamePlay}
              gameId={state?.game?._id}
              coin={coins}
              categoryId={state?.category?._id}
            />
          )}
          {isMobile && (
            <Mobile
              slug={slug}
              game={state?.game}
              category={state?.category}
              rating={state?.rating}
              mostPlayed={state?.mostPlayed}
              handle={handle}
              onGamePlay={onGamePlay}
              gameId={state?.game?._id}
              coin={coins}
              categoryId={state?.category?._id}
            />
          )}
          {moreGames && Array.isArray(moreGames) && moreGames.length > 0 && (
            <MoreGame
              games={moreGames}
              isMobile={mobile}
              catType={state?.category?.name}
              limitNum={limit}
              noMoreCatGames={noMoreCatGames}
              updateStateInParent={updateStateInParent}
              categoryId={state?.category?._id}
            />
          )}
        </div>
        <FloatButton />
      </>
    );
  } else {
    return (
      <>
        <Shimmer_gameCard />
        <Shimmer_singleRow_container />
        <Shimmer_singleRow_container />
      </>
    );
  }
}
