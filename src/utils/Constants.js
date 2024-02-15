export const SITE_URL = "https://www.atmegame.com";
export const S3_IMAGE_PATH = "https://www.atmegame.com";
export const ICON_URL = "https://www.atmegame.com/img/icons";
export const IMAGE_PATH_NEW = "https://images.atmegame.com/";
export const SLIDES_IMG_PATH = "https://slides.atmegame.com/";

export const MORE_CATEGORY = {
  name: "more",
  title: "subMore",
  slug: "more",
  height: "46",
  width: "46",
  src: "/img/more.png",
};

export const SUB_MORE_CATEGORY = {
  name: "more",
  title: "sub-cat",
  slug: "/sitemap",
  height: "46",
  width: "46",
  src: "/img/more.png",
};

export const MAIN_MENU = "mainMenu";
export const SUB_MENU = "subMenu";
export const WEEKLY_GAMES = "weeklyGames";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const JWT = "JWT";
export const JWT_EXPIRY = 30 * 24 * 60 * 60;

export const USER_LOCATION = "userLocation";
export const LOCATION_EXPIRY = 7 * 24 * 60 * 60;
export const GUEST_USER = "GUEST_USER";

export const MAX_GAME_SIZE = 800;
export const BONUS_COIN = 100;

export const COLORS = [
  "#e8f2ff",

  "#d3fdff",

  "#dff7ed",

  "#fff0d9",

  "#ffd7fc",

  "#e8f2ff",

  "#d3fdff",

  "#ffe6e1",

  "#fff0d9",

  "#fcf7ea",

  "#ffe6f0",
];

export const SIDEBAR_LINK = [
  {
    id: 1,
    name: "Dashboard",
    to: "/dashboard",
  },
  {
    id: 2,
    name: "Profile",
    to: "/user/profile",
  },
  {
    id: 3,
    name: "Total Games Played",
    to: "/user/games-played",
  },
  {
    id: 4,
    name: "Recommended Games",
    to: "/user/recommended-games",
  },
  {
    id: 5,
    name: "Favourites Games",
    to: "/user/favourites",
  },
  {
    id: 6,
    name: "Liked Games",
    to: "/user/liked",
  },
  {
    id: 7,
    name: "Disliked Games",
    to: "/user/disliked",
  },
  {
    id: 8,
    // name: "Leaderboard <span>New</span>",
    name: "Leaderboard",
    to: "/leaderboard",
  },
  // {
  //   id: 13,
  //   name: "Logout",
  //   to: "/signout",
  // },
];

export const DEFAULT_EXPIRES = 1;
export const GAME_PLAYED_COINS = 10;
export const IS_GAME_PLAYED = "GAME_PLAYED";
export const GAME_PLAYED_COUNT = "GAME_PLAYED_COUNT";
