import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import GameImage from "@/components/ui/images/Icon";
import SocialShare from "@/utils/SocialShare";
import useDevice from "@/hooks/useDevice";

import { SLIDES_IMG_PATH } from "@/utils/Constants";
import {
  gameLike,
  gameDislike,
  gameFavourite,
  updateUserData,
} from "@/api/game";
import { authenticate } from "@/api/auth";

function Review({ styles, game, handle, loadGames }) {
  const [state, setState] = useState({
    user: null,
    isLiked: false,
    isDisliked: false,
    isFavourite: false,
    isModal: false,
    showMoreOptions: false,
  });

  const [mobile] = useDevice();
  const device = mobile ? "mobile" : "desktop";
  const moreRef = useRef(null);

  const handleReviewButtons = (_id) => {
    const auth = authenticate();

    const { likes, dislikes, favourite } = auth.user;

    let isLiked = isGameExists(_id, likes);
    let isDisliked = isGameExists(_id, dislikes);
    let isFavourite = isGameExists(_id, favourite);

    setState((prevState) => ({
      ...prevState,
      isLiked,
      isDisliked,
      isFavourite,
      user: auth.user,
    }));
  };

  useEffect(() => {
    handleReviewButtons(game._id);
  }, [game._id]);

  const isGameExists = (gameId, games) => {
    let index = games?.indexOf(gameId);
    if (index === -1) {
      return false;
    }
    return true;
  };

  const addToLiked = (game, userId) => {
    gameLike(game._id, {
      likes: ++game.likes,
      type: "add",
      userId,
    });
  };

  const removedFromLiked = (game, userId) => {
    gameLike(game._id, {
      likes: --game.likes,
      type: "remove",
      userId,
    });
  };

  const addToDisliked = (game, userId) => {
    gameDislike(game._id, {
      dislikes: ++game.dislikes,
      type: "add",
      userId,
    });
  };

  const removedFromDisliked = (game, userId) => {
    gameDislike(game._id, {
      dislikes: --game.dislikes,
      type: "remove",
      userId,
    });
  };

  const addToFavourite = (game, userId) => {
    gameFavourite(game._id, { type: "add", userId });
  };

  const removedFromFavourite = (game, userId) => {
    gameFavourite(game._id, { type: "remove", userId });
  };

  const handleLikes = (e) => {
    e.preventDefault();
    const { user } = state;
    // let likes = [];
    // let dislikes = [];
    if (isGameExists(game._id, user.dislikes)) {
      removedFromDisliked(game, user._id);
      user.dislikes = user.dislikes.filter((gameId) => game._id !== gameId);
    }
    if (isGameExists(game._id, user.likes)) {
      removedFromLiked(game, user._id);
      user.likes = user.likes.filter((gameId) => game._id !== gameId);
    } else {
      addToLiked(game, user._id);
      user.likes = [game._id, ...user.likes];
    }

    updateUserData(user);
    const isLiked = user.likes.includes(game._id);
    const isDisliked = user.dislikes.includes(game._id);

    setState((prevState) => ({
      ...prevState,
      user,
      isLiked,
      isDisliked,
    }));
  };

  const handleDislikes = (e) => {
    e.preventDefault();
    const { user } = state;
    let likes = [];
    let dislikes = [];

    if (isGameExists(game._id, user.likes)) {
      removedFromLiked(game, user._id);
      likes = user.likes.filter((gameId) => game._id !== gameId);
    }
    if (isGameExists(game._id, user.dislikes)) {
      removedFromDisliked(game, user._id);
      dislikes = user.dislikes.filter((gameId) => game._id !== gameId);
    } else {
      addToDisliked(game, user._id);
      dislikes = [...user.dislikes, game._id];
    }

    const newUserState = { ...user, likes: likes, dislikes: dislikes };
    updateUserData(newUserState);
    const isDisliked = dislikes.includes(game._id);
    const isLiked = likes.includes(game._id);

    setState((prevState) => ({
      ...prevState,
      user: newUserState,
      isLiked,
      isDisliked,
    }));
  };

  const handleFavourite = (e) => {
    e.preventDefault();
    const { user } = state;
    let favourite = [];
    if (isGameExists(game._id, user.favourite)) {
      removedFromFavourite(game, user._id);
      favourite = user.dislikes.filter((gameId) => game._id !== gameId);
    } else {
      addToFavourite(game, user._id);
      favourite = [...user.favourite, game._id];
    }

    const newUserState = { ...user, favourite: favourite };
    updateUserData(newUserState);
    const isFavourite = favourite.includes(game._id);
    setState((prevState) => ({
      ...prevState,
      user: newUserState,
      isFavourite,
    }));
  };

  const calculateLikes = () => {
    let { likes, dislikes } = game;
    likes = likes === 0 ? 0 : (likes * 100) / (likes + dislikes);
    dislikes = dislikes === 0 ? 0 : 100 - likes;

    return { likes: Math.round(likes), dislikes: Math.round(dislikes) };
  };

  const handleFullScreen = (e) => {
    e.preventDefault();
    if (typeof loadGames === "function") {
      loadGames();
    } else {
      handle.enter(e);
    }
  };

  const listReviewIcons = () => {
    const { likes, dislikes } = calculateLikes();
    const { isLiked, isDisliked, isFavourite, showMoreOptions } = state;
    const likeObj = {
      class: "",
      img: mobile ? "/img/icon-like-gray.svg" : "/img/icon-like.svg",
    };
    const dislikeObj = {
      class: "",
      img: mobile ? "/img/icon-dislike-gray.svg" : "/img/icon-dislike.svg",
    };
    const favouriteObj = {
      class: "",
      img: mobile ? "/img/icon-favourite-gray.svg" : "/img/icon-favourite.svg",
    };
    if (isLiked) {
      likeObj.class = "active";
      likeObj.img = "/img/icon-like-filled.svg";
    }
    if (isDisliked) {
      dislikeObj.class = "active";
      dislikeObj.img = "/img/icon-dislike-filled.svg";
    }
    if (isFavourite) {
      favouriteObj.class = "active";
      favouriteObj.img = "/img/icon-favourite-filled.svg";
    }

    return (
      <ul onClick={(e) => e.stopPropagation()}>
        <li>
          <Link
            prefetch={false}
            href=""
            className={likeObj.class}
            onClick={handleLikes}
          >
            <GameImage
              src={likeObj.img}
              alt="Like Game"
              title="Like"
              width="24"
              height="24"
            />{" "}
            {likes}%
          </Link>
        </li>
        <li>
          <Link
            prefetch={false}
            href=""
            className={dislikeObj.class}
            onClick={handleDislikes}
          >
            <GameImage
              src={dislikeObj.img}
              alt="Dislike Game"
              title="Dislike"
              width="24"
              height="24"
            />{" "}
            {dislikes}%
          </Link>
        </li>
        <li className={styles.favourite}>
          <Link
            prefetch={false}
            href=""
            className={favouriteObj.class}
            onClick={handleFavourite}
          >
            <GameImage
              src={favouriteObj.img}
              alt="Favourite Game"
              title="Favourite"
              width="24"
              height="24"
            />
            Favourite
          </Link>
        </li>
        <li className={styles.share}>
          <SocialShare currentUrl={game?.slug} />
        </li>
        <li className={styles.fullScreen}>
          <Link prefetch={false} href="" onClick={(e) => handleFullScreen(e)}>
            <GameImage
              src={`/img/icon-full-screen.svg`}
              alt=""
              title="Full Screen"
              width="24"
              height="24"
            />
            Full Screen
          </Link>
        </li>
        {mobile && (
          <li className={`${styles.moreOptions}`}>
            <Link
              prefetch={false}
              href=""
              onClick={(e) => handleMoreBtn(e)}
              ref={moreRef}
            >
              <GameImage
                src={mobile ? "/img/icon-more-gray.svg" : "/img/icon-more.svg"}
                alt=""
                title="More"
                width="8"
                height="24"
              />
              More
            </Link>
            {showMoreOptions && (
              <ul className={styles.moreLinks}>
                <li className={styles.favouriteMore}>
                  <Link
                    prefetch={false}
                    href=""
                    className={favouriteObj.class}
                    onClick={(e) => handleFavourite(e)}
                  >
                    <GameImage
                      src={favouriteObj.img}
                      alt="Favourite Game"
                      title="Favourite"
                      width="24"
                      height="24"
                    />
                    Favourite
                  </Link>
                </li>
                <li className="">
                  <SocialShare
                    currentUrl={game?.slug}
                    shareIcon={
                      mobile
                        ? "/img/icon-share-gray.svg"
                        : "/img/icon-share.svg"
                    }
                  />
                </li>
              </ul>
            )}
          </li>
        )}
      </ul>
    );
  };

  const { showMoreOptions } = state;
  function handleMoreBtn(e) {
    e.preventDefault();
    setState((prev) => ({
      ...prev,
      showMoreOptions: !showMoreOptions,
    }));
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setTimeout(() => {
          setState((prev) => ({
            ...prev,
            showMoreOptions: false,
          }));
        }, 10);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [moreRef]);

  return (
    <div className={styles.gameDetailsFooter}>
      <div className={styles.gameLeft}>
        <div className={styles.gameLeft}>
          <div className={styles.gameThumb}>
            {game?.image && (
              <GameImage
                src={`${SLIDES_IMG_PATH}mobile/${game.image}_slide.jpg`}
                width="48"
                height="42"
                alt={`${game?.name} games`}
                title={`${game?.name} games`}
              />
            )}
          </div>
          <h3 itemProp="name" className={styles.ml8}>
            {game?.name}
          </h3>
          <meta
            itemProp="image"
            content={`${SLIDES_IMG_PATH}${device}/${game.image}_slide.jpg`}
            alt={game.name}
          />
          <meta
            itemProp="url"
            content={`https://www.atmegame.com/games/${game.slug}`}
          />
        </div>
      </div>
      <div className={styles.gameRight}>{listReviewIcons()}</div>
    </div>
  );
}

export default Review;
