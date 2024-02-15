import { API_URL } from "@/config";

export const getCategoryGames = async (
  categoryId,
  isMobile = true,
  limit = 60,
  skip = 0,
  filter = ""
) => {
  isMobile = isMobile ? 1 : 0;
  const response = await fetch(
    `${API_URL}/v1/category/${categoryId}/games?isMobile=${isMobile}&limit=${limit}&skip=${skip}&sort=${filter}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  const { status, result } = await response.json();
  if (status !== "success") {
    console.log("Could not fetch data");
    return { games: [], totalCount: 0 };
  }

  return result;
};

export const updateCategoryCount = (categoryId) => {
  return fetch(`${API_URL}/category/${categoryId}/count`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
};

export const getSubCategory = async () => {
  let response = await fetch(
    `${API_URL}/category?isSub=1&order=name:asc&limit=44`
  );
  response = await response.json();
  return response;
};

export const getAllCategory = async () => {
  const response = await fetch(`${API_URL}/category/sitemap`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const { status, result } = await response.json();
  if (status !== "success") {
    console.log("Could not fetch data");
    return {};
  }

  return result;
};

export const fetchCategoryGameById = async (
  categoryId,
  limit = 6,
  skip = 0
) => {
  try {
    let response = await fetch(
      `${API_URL}/game?categoryId=${categoryId}&isNewGame=true&skip=${skip}&limit=${limit}`
    );
    response = await response.json();

    return response;
  } catch (error) {
    console.log("Error occured 💥:");
    console.log(error);
  }
};

export const fetchGameRelatedCategory = async (categoryId) => {
  let response = await fetch(`${API_URL}/category/related/${categoryId}`);
  // let response = await fetch(`https://atmeserv.atmegame.com/category/related/${categoryId}`);

  response = await response.json();

  return response;
};

export const fetchCategoryGame = async (
  slug,
  isMobile,
  filter,
  limit = 60,
  skip = 0
) => {
  try {
    switch (filter) {
      case "manualRating":
        filter = "manualRating";
        break;
      case "likes":
        filter = "likes";
        break;
      case "totalPlayed":
        filter = "totalPlayed";
        break;
      default:
        filter = "new";
        break;
    }

    isMobile = isMobile ? 1 : 0;
    let response = await fetch(
      `${API_URL}/game/category/${slug}?isMobile=${isMobile}&skip=${skip}&sort=${filter}&limit=${limit}`
    );
    response = await response.json();

    if (response.status !== "success") {
      return [];
    }

    return response.result;
  } catch (error) {
    console.log(error.response);
    return { status: "fail", message: error.response.statusText };
  }
};
