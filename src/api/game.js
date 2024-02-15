import { API_URL } from "@/config";
import { authenticate, saveAuth } from "./auth";
import { BONUS_COIN } from "@/utils/Constants";

export const findGameBySlug = async (slug, isMobile = true) => {
  try {
    isMobile = isMobile ? 1 : 0;
    let response = await fetch(
      `${API_URL}/game/slug/${slug}?isMobile=${isMobile}`
    );
    response = await response.json();
    if (response.status == "error" && response.message == "Game not found.") {
      window.location.href = "/";
    } else {
      return response;
    }
  } catch (error) {
    console.log("Error occured 💥:");
    console.log(error);
    return [];
  }
};

export const searchGame = async (game, limit) => {
  try {
    let response = await fetch(
      `${API_URL}/game/search?name${game}&limit=${limit}`
    );
    response = await response.json();

    return response;
  } catch (error) {
    console.log("Error occured 💥:");
    console.log(error);
  }
};

export const saveGameRating = async (data) => {
  return fetch(`${API_URL}/game-rating`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    return response.json();
  });
};

export const gameLike = async (gameId, data) => {
  let response = await fetch(`${API_URL}/game/${gameId}/like`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  await response.json();
};

export const gameDislike = async (gameId, data) => {
  let response = await fetch(`${API_URL}/game/${gameId}/dislike`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  await response.json();
};

export const gameFavourite = async (gameId, data) => {
  let response = await fetch(`${API_URL}/game/${gameId}/favourite`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  await response.json();
};

//update user data
export const updateUserData = async (user) => {
  let { isSignedIn, token } = authenticate();
  saveAuth({ isSignedIn, user, token });
};

export const gamePlayed = async (gameId, data) => {
  let response = await fetch(`${API_URL}/game/${gameId}/played`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  response = await response.json();
  const { user } = response.result;
  if (!user) {
    return data;
  }

  updateUserData(user);
  return user;
};

export const reportsGame = async (data) => {
  return fetch(`${API_URL}/report-game`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log("Error: ", err);
      return { status: 500, error: "Something went wrong" };
    });
};

//more game
// export const moreGames = async (slug, isMobile = true) => {
//   return "api integration pending";
//   // try {
//   //   isMobile = isMobile ? 1 : 0;
//   //   let response = await fetch(
//   //     `${API_URL}/game/slug/${slug}?isMobile=${isMobile}`
//   //   );
//   //   response = await response.json();

//   //   return response;
//   // } catch (error) {
//   //   console.log("Error occured 💥:");
//   //   console.log(error);
//   // }
// };

export const addTransaction = async (userId, data, token) => {
  try {
    const result = await fetch(`${API_URL}/user/${userId}/transaction`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    const response = await result.json();
    if (response.status === "success") {
      return response.result;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMoreGameByCategoryId = async (categoryId, skip = 0) => {
  const limit = 12;
  const result = await fetch(
    // `${API_URL}/game?categoryId=${categoryId}&isNewGame=true&skip=${skip}&limit=${limit}`
    `${API_URL}/category/moregame?categoryId=${categoryId}&isNewGame=true&skip=${skip}&limit=${limit}`
  );
  const response = await result.json();
  if (response.status === "success") {
    return response.result;
  }

  return response.data;
};

export const getGameRating = async (id) => {
  let res = await fetch(`${API_URL}/game-rating/${id}`);
  res = await res.json();
  return res;
};

export const updateRewardCoins = (coins = BONUS_COIN) => {
  const auth = authenticate();
  if (auth.isSignedIn) {
    addTransaction(
      auth.user._id,
      {
        name: "Reward Coins",
        coins: coins,
        transaction: CREDIT,
        image: "",
      },
      auth.token
    ).then((user) => user);
  }
  const updatedCoins = auth.user.coins + coins;
  auth.user = { ...auth.user, coins: updatedCoins };
  saveAuth(auth);
};

export const getSimilarGames = async (categoryId, subCategoryId) => {
  const queryString = subCategoryId
    ? `subCategoryId=${subCategoryId}`
    : `categoryId=${categoryId}`;

  try {
    let response = await fetch(`${API_URL}/v1/game/similar?${queryString}`);
    response = await response.json();

    if (response.status !== "success") {
      return [];
    }

    return response.result.games;
  } catch (error) {
    console.log("Error occured 💥:");
    console.log(error);
    return [];
  }
};

export const fetchRelatedAndMoreGames = async (
  id,
  subCategoryId,
  isMobile = true
) => {
  try {
    isMobile = isMobile ? 1 : 0;
    const queryString = subCategoryId ? `subCategoryId=${subCategoryId}&` : "";
    let response = await fetch(
      `${API_URL}/v1/category/${id}/related-more?${queryString}isMobile=${isMobile}&limit=30`
    );
    response = await response.json();

    if (response.status !== "success") {
      return [];
    }
    return response.result;
  } catch (error) {
    console.log("Error occured 💥:");
    console.log(error);
    return [];
  }
};
