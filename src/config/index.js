// 1) API URL
const API_LIST = {
  PROD: "https://gameserv.atmegame.com",
  TEST: "https://testserv.atmegame.com",
  NEWTEST: "https://testserv2.atmegame.com",
  DEV: "http://localhost:3001",
};

export const API_URL = API_LIST[process.env.NEXT_PUBLIC_ENV];

export const MOBILE_CONFIG = {
  gameClass: "gameThree",
  numberOfGames: 9,
};

export const DESKTOP_CONFIG = {
  w33: "gameTwo",
  w66: "gameSix",
  gameClass: "gameTwo",
  numberOfGames: 4,
};

export const DESKTOP_GAME_CONFIG = {
  w33: {
    gameClass: "gameThree",
    numberOfGames: 6,
  },
  w66: {
    gameClass: "gameSix",
    numberOfGames: 12,
  },
};

// 3) Location API
export const LOCATION_API = "https://pro.ip-api.com/json?key=iZun9ZnnZf8crvL";
export const S3_IMAGE_PATH = "https://www.atmegame.com";
export const S3_IMAGE_URL = "https://image.atmegame.com";
export const S3_SLIDE_IMAGE = "https://slides.atmegame.com";

// 4) SITE_URL
export const SITE_URL = "https://next2.atmegame.com";
