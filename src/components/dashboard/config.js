export const getDashboardConfig = (isMobile = 1) => {
  if (isMobile) {
    return {
      gameClass: "gameTwo",
      numberOfGames: 30,
    };
  }
  return {
    gameClass: "gameSix",
    numberOfGames: 60,
  };
};
