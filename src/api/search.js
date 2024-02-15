import { API_URL } from "@/config";

export const getWeeklyGames = async (limit = 6) => {
  try {
    let response = await fetch(`${API_URL}/game/weekly?limit=${limit}`);
    response = await response.json();
    return response;
  } catch (error) {
    console.log("Error occured 💥:");
    console.log(error);
  }
};

export const gameSearchByTerm = async (searchTerm) => {
  let response = await fetch(
    `${API_URL}/game-category/search?name=${searchTerm}`
  );
  response = await response.json();
  return response;
};

export const getCatwithSearchTermOnEnter = async (
  searchTerm,
) => {
  let response = await fetch(
    `${API_URL}/game/search?name=${searchTerm}`
  );
  response = await response.json();
  return response;
};

export const topWeeklyGamesSearch = async (limit = 6) => {
  let res = await fetch(`${API_URL}/game/mostplayed?limit=${limit}`);
  res = await res.json();
  return res;
}


