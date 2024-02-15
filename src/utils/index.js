import { S3_IMAGE_PATH } from "./Constants";
import { gamePlayed } from "@/api/game";
import { setItem, getItem, removeItem } from "@/utils/LS";

export const formatNumber = (number) => {
  let absNumber = Math.abs(number);
  if (absNumber > 999 && absNumber < 1000000) {
    return Math.sign(number) * (Math.abs(number) / 1000).toFixed(1) + "K";
  } else if (absNumber > 999999 && absNumber < 1000000000) {
    return Math.sign(number) * (Math.abs(number) / 1000000).toFixed(1) + "M";
  } else if (absNumber > 999999999) {
    return Math.sign(number) * (Math.abs(number) / 1000000000).toFixed(1) + "B";
  }

  return absNumber;
};

export const startCase = (str) => {
  if (!str) {
    return "";
  }

  return str?.replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });
};

export const isValidUrl = (urlString) => {
  try {
    return Boolean(new URL(urlString));
  } catch (e) {
    return false;
  }
};

export const limitWords = (string, limit) => {
  var words = string.split(" ");
  words = words.slice(0, limit);
  let finalstr = words.join(" ");
  return finalstr + "...";
};

export const ddMonYy = (createDate) => {
  const date = new Date(createDate).toLocaleString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return date;
};

export const getUserImage = (avtar, gender) => {
  const defaultImage = ["male-user-avatar.svg", "female-user-avatar.svg"];

  if (avtar && !defaultImage.includes(avtar)) {
    return avtar;
  }
  if (gender === "M") {
    return `${S3_IMAGE_PATH}/img/male-user-avatar.svg`;
  }

  return `${S3_IMAGE_PATH}/img/female-user-avatar.svg`;
};

export const offlineCoin = () => {
  let user = getItem("JWT") && getItem("JWT").user;
  return user && user.coins;
};

// export const gamePlayEvents = async (gameId, user, mobile, isSignedIn) => {
// await gamePlayed(gameId, user);
// let playedCount = getItem("GAME_PLAYED_COUNT")
//   ? JSON.parse(getItem("GAME_PLAYED_COUNT"))
//   : 0;
// let newCount = playedCount + 1;
// // if (mobile) {
// setItem("GAME_PLAYED_COUNT", newCount);
// return calculateCoin(newCount);
// // }
// };

// async function calculateCoin(gamePlayedCount, defaultCoin = 10) {
//   let singUpBonus = getItem("SIGN_UP_BONUS") ? getItem("SIGN_UP_BONUS") : 0;
//   let playedCoin = getItem("GAME_PLAYED_COIN_COUNT")
//     ? getItem("GAME_PLAYED_COIN_COUNT")
//     : 0;
//   if (gamePlayedCount > 0 && gamePlayedCount < 5) {
//     playedCoin += gamePlayedCount * defaultCoin;
//   } else {
//     playedCoin += 100;
//   }
//   setItem("GAME_PLAYED_COIN_COUNT", playedCoin);
//   let ele = document.querySelector("#headerCoin");
//   let totalCoin = playedCoin + singUpBonus;
//   ele.innerHTML = totalCoin;
//   return playedCoin;
// }

// async function calculateCoin(gamePlayedCount, defaultCoin = 10) {
//   let singUpBonus = getItem("SIGN_UP_BONUS") ? getItem("SIGN_UP_BONUS") : 0;
//   let playedCoin = getItem("GAME_PLAYED_COIN_COUNT")
//     ? getItem("GAME_PLAYED_COIN_COUNT")
//     : 0;

//   let coinValuePerGame = 10;
//   if (gamePlayedCount < 10) {
//     coinValuePerGame += gamePlayedCount * defaultCoin;
//     playedCoin += gamePlayedCount * defaultCoin;
//   } else {
//     coinValuePerGame = 100;
//     playedCoin += 100;
//   }

// if (playedCoin < 100) {
//   // playedCoin = gamePlayedCount * defaultCoin;
//   coinValuePerGame = (gamePlayedCount * defaultCoin) + 10;
// } else {
//   coinValuePerGame = 100
//   // currentGameCoinValue = 100;
//   // playedCoin += 100;
// }
//   setItem("PER_GAME_PLAYED_COIN", coinValuePerGame);
//   setItem("GAME_PLAYED_COIN_COUNT", playedCoin);
//   let ele = document.querySelector("#headerCoin");
//   let totalCoin = playedCoin + singUpBonus;
//   ele.innerHTML = totalCoin;
//   return { playedCoin, coinValuePerGame };
// }

// export const getCoins = async () => {
//   let singUpBonus = getItem("SIGN_UP_BONUS") ? getItem("SIGN_UP_BONUS") : 0;
//   let Plyedcoin = getItem("GAME_PLAYED_COIN_COUNT")
//     ? getItem("GAME_PLAYED_COIN_COUNT")
//     : 0;
//   let coin = singUpBonus + Plyedcoin;
//   return coin;
// };

// export const updateCoinAfterLogin = async (data) => {
//   let user = data && data.user;
//   let transaction = user && user.transactions;
//   let SIGN_UP_BONUS_AFTER_GAME_PLAYED =
//     user && user.transactions && user.transactions[0].coins
//       ? user.transactions[0].coins
//       : 0;
//   let coins = user && user.coins ? user.coins : 0;
//   let SIGN_UP_BONUS =
//     SIGN_UP_BONUS_AFTER_GAME_PLAYED > 0
//       ? SIGN_UP_BONUS_AFTER_GAME_PLAYED
//       : coins;
//   setItem("SIGN_UP_BONUS", SIGN_UP_BONUS);

//   if (!transaction) {
//     removeItem("GAME_PLAYED_COIN_COUNT");
//     removeItem("GAME_PLAYED_COUNT");
//   } else {
//     let gamePlayedCoin =
//       transaction &&
//       Array.isArray(transaction) &&
//       transaction.slice(1).reduce((ac, cr) => ac + cr.coins, 0);
//     let gamePlayedCount =
//       transaction && Array.isArray(transaction) && transaction.length;

//     setItem("GAME_PLAYED_COIN_COUNT", gamePlayedCoin);
//     setItem("GAME_PLAYED_COUNT", gamePlayedCount);
//   }

//   let ele = document.querySelector("#headerCoin");
//   ele.innerHTML = coins;
// };

export const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const showRewardAd = (callback) => {
  console.log("Display reward ad");

  const insElement = document.createElement("script");
  insElement.setAttribute("data-ad-client", "ca-pub-9733910408335876");
  insElement.setAttribute("data-ad-slot", "6560622696");
  insElement.setAttribute("data-ad-format", "auto");
  insElement.setAttribute("class", "adsbygoogle");
  insElement.setAttribute("data-full-width-responsive", "true");
  insElement.style.display = "block";
  document.head.appendChild(insElement);
  window.rewardAd(callback);
};
