import { showRewardAd } from "@/utils";

// export const displayRewardAdX = (callback) => {
//   showRewardAd((result) => {
//     if (result?.status === "viewed") {
//       return callback(true);
//     }
//     callback(true);
//   });
// };

export const displayRewardAdX = (callback) => {
  showRewardAd((result) => {
    if (result?.status === "viewed") {
      return callback(true);
    }

    rewardAdX();
    callback(true);
  });
};
