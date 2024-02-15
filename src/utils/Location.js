import { LOCATION_API } from "@/config";
import { USER_LOCATION, LOCATION_EXPIRY } from "./Constants";
import { setItemWithExpiry, getItemWithExpiry } from "@/utils/LS";
import { setCookies } from "./Cookies";

// export const getLocation = async () => {
//   try {
//     let location = getCookies(USER_LOCATION);
//     if (location) {
//       return location;
//     }

//     const response = await fetch(LOCATION_API);
//     const result = await response.json();

//     setCookies(USER_LOCATION, result, LOCATION_EXPIRY);
//     return result;
//   } catch (error) {
//     return null;
//   }
// };

export const getLocation = async () => {
  try {
    let location = getItemWithExpiry(USER_LOCATION);
    if (location) {
      return location;
    }

    const response = await fetch(LOCATION_API);
    const result = await response.json();

    setCookies(USER_LOCATION, result.countryCode, LOCATION_EXPIRY);
    setItemWithExpiry(USER_LOCATION, result, LOCATION_EXPIRY);
    return result;
  } catch (error) {
    return null;
  }
};
