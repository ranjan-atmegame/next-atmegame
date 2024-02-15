import { API_URL } from "@/config";

export const userProfile = async (token) => {
  const response = await fetch(`${API_URL}/users/me`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const { status, result } = await response.json();
  if (status !== "success") {
    return null;
  }

  return result;
};

export const dashboardData = async (token) => {
  const [recommendGames, user] = await Promise.all([
    dashboardRecommendGame(token),
    userProfile(token),
  ]);

  return {
    recommendGames,
    transactions: user.transactions,
    likes: user.transactions,
    favourite: user.favourite,
    totalPlayed: user.totalPlayed,
  };
};

export const dashboardRecommendGame = async (token, limit = 4) => {
  const response = await fetch(
    `${API_URL}/users/recommend?dashboard=1&limit=${limit}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const { status, result } = await response.json();
  if (status !== "success") {
    return [];
  }

  return result;
};

export const userLikedGames = async (token, skip = 0, limit = 10) => {
  const response = await fetch(
    `${API_URL}/users/liked?&skip=${skip}&limit=${limit}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const { status, result } = await response.json();
  if (status !== "success") {
    return [];
  }

  return result.likes;
};

export const userDislikedGames = async (token, skip = 0, limit = 10) => {
  const response = await fetch(
    `${API_URL}/users/disliked?&skip=${skip}&limit=${limit}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const { status, result } = await response.json();

  if (status !== "success") {
    return [];
  }

  return result.dislikes;
};

export const userFavouriteGames = async (token, skip = 0, limit = 10) => {
  const response = await fetch(
    `${API_URL}/users/favourites?&skip=${skip}&limit=${limit}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const { status, result } = await response.json();

  if (status !== "success") {
    return [];
  }

  return result.favourite;
};

export const userGamePlayed = async (token, skip = 0, limit = 10) => {
  const response = await fetch(
    `${API_URL}/users/games-played?skip=${skip}&limit=${limit}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const { status, result } = await response.json();

  if (status !== "success") {
    return [];
  }

  return result.totalPlayed;
};

export const userRecommendedGames = async (token, skip = 0, limit = 10) => {
  const response = await fetch(
    `${API_URL}/users/recommend?&skip=${skip}&limit=${limit}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const { status, result } = await response.json();

  if (status !== "success") {
    return [];
  }

  return result.games;
};

export const usersRank = async (token, type, skip = 0, limit = 10) => {
  const response = await fetch(
    `${API_URL}/users/rank?range=${type}&limit=${limit}&skip=${skip}`,
    // `https://atmeserv.atmegame.com/users/rank?range=${type}&limit=${limit}&skip=${skip}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const { status, users } = await response.json();

  if (status !== "success") {
    return [];
  }

  return users;
};

export const updateProfile = async (token, user) => {
  return fetch(`${API_URL}/user/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      if (response.error) {
        return response;
      } else {
        return {
          response,
          msg: "Your Profile updated successfully.",
        };
      }
    })
    .catch((err) => {
      console.log("Error: ", err);
      return { status: 500, error: "Something went wrong" };
    });
};
