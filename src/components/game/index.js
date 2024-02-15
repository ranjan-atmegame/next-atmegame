"use client";
import { useEffect, useState } from "react";
import { useFullScreenHandle } from "react-full-screen";
import {
  addTransaction,
  gamePlayed,
  fetchRelatedAndMoreGames,
} from "@/api/game";
import Desktop from "./desktop";
import Mobile from "./mobile";
import { authenticate, saveAuth } from "@/api/auth";
import FloatButton from "@/utils/FloatButton";
import { setItem, getItem, setItemWithExpiry } from "@/utils/LS";
import {
  GAME_PLAYED_COINS,
  IS_GAME_PLAYED,
  GAME_PLAYED_COUNT,
} from "@/utils/Constants";
import Shimmer_singleRow_container from "../common/shimmer/shimmer_singleRow_container";
import MoreGame from "./MoreGame";
import CarouselWithScroll from "@/components/common/CarouselWithScroll";
import CardContainer from "../ui/card/CardContainer";

export default function Game({ gameDetail, isMobile, cat, subCat }) {
  const [state, setState] = useState(gameDetail);
  const [coins, setCoins] = useState(10);
  const [limit, setLimit] = useState(0);
  const [moreGames, setMoreGames] = useState({});
  const [relatedCat, setRelatedCat] = useState({});
  const [noMoreCatGames, setNoMoreCatGames] = useState(false);

  const handle = useFullScreenHandle();
  const CREDIT = 1;
  let apiHit = true;

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", getCatGames);
    return () => {
      document.removeEventListener("scroll", getCatGames);
    };
  }, []);

  async function getCatGames() {
    if (apiHit) {
      apiHit = false;
      const resp = await fetchRelatedAndMoreGames(
        state.category._id,
        state.game.subCategoryId,
        isMobile
      );
      const moreGames = resp?.games;
      const relatedCat = resp?.relatedCategory;
      setMoreGames(moreGames);
      setRelatedCat(relatedCat);
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

  const onGamePlay = async () => {
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
        <div itemScope="" itemType="https://schema.org/Game">
          {!isMobile && (
            <Desktop
              game={gameDetail.game}
              category={gameDetail.category}
              subCategory={gameDetail.subCategory}
              rating={gameDetail.rating}
              handle={handle}
              onGamePlay={onGamePlay}
              coin={coins}
            />
          )}
          {isMobile && (
            <Mobile
              game={gameDetail.game}
              category={gameDetail.category}
              subCategory={gameDetail.subCategory}
              rating={gameDetail.rating}
              handle={handle}
              onGamePlay={onGamePlay}
              coin={coins}
            />
          )}
          {relatedCat && Array.isArray(relatedCat) && relatedCat.length > 0 ? (
            <CardContainer isContainerStyle={true}>
              <CarouselWithScroll
                items={relatedCat}
                title="Related Categories"
                moreBtn={false}
                circleCls="circularCard"
                gameClass="gameSeven"
                itemsToShow={isMobile ? "3" : "8"}
                slug=""
                cardColor="category_mobGray"
                iconName="similarGames"
                imgCls="roundedImg"
              />
            </CardContainer>
          ) : (
            <Shimmer_singleRow_container gameTitle="Game" />
          )}

          {moreGames && Array.isArray(moreGames) && moreGames.length > 0 ? (
            <MoreGame
              games={moreGames}
              isMobile={isMobile}
              catType=""
              limitNum={limit}
              noMoreCatGames={noMoreCatGames}
              updateStateInParent={updateStateInParent}
              categoryId={state?.category?._id}
              gameClass=""
              cat={cat}
              subCat={subCat}
            />
          ) : (
            <Shimmer_singleRow_container gameTitle="Game" />
          )}
        </div>
        <FloatButton />
      </>
    );
  } else {
    return <Shimmer_singleRow_container gameTitle="Game" />;
  }
}
