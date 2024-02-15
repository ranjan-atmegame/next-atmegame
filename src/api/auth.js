const jwt = require("jsonwebtoken");
import { v4 as uuidv4 } from "uuid";
import { JWT } from "@/utils/Constants";
import { getLocation } from "@/utils/Location";
import { API_URL } from "@/config";
import { getCookies, setCookies, removeCookies } from "@/utils/Cookies";
import { updateCoinAfterLogin } from "@/utils/index";
import { getItem, removeItem, setItem } from "@/utils/LS";

function formatUser(user) {
  return {
    _id: user._id,
    userName: user.userName,
    userType: user.userType,
    email: user.email,
    coins: user.coins,
    rank: user.rank,
    firstName: user.firstName,
    lastName: user.lastName,
    gender: user.gender,
    status: user.status,
    country: user.country,
    dob: user.dob,
    lastLogin: user.lastLogin,
    isNewsletter: user.isNewsletter,
    avtar: user.avtar,
    likes: user.likes,
    dislikes: user.dislikes,
    favourite: user.favourite,
  };
}

export const login = async (user) => {
  return fetch(`${API_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result && result.user) {
        // updateCoinAfterLogin(result);
        result.user = formatUser(result.user);
      }
      return result;
    })
    .catch((err) => {
      console.log("Error: ", err);
      return { status: 500, error: "Something went wrong" };
    });
};

// export const authenticate = () => {
//   const jwt = getCookies(JWT);
//   return jwt ? jwt : _getGuestUser();
// };

export const authenticate = () => {
  let jwt = getItem(JWT);
  if (jwt) {
    return jwt;
  }
  jwt = _getGuestUser();
  setItem(JWT, jwt);
  return jwt;
};

export const _getGuestUser = () => {
  return {
    isSignedIn: false,
    user: {
      id: uuidv4(),
      nickName: "Guest User",
      likes: [],
      dislikes: [],
      favourite: [],
      totalPlayed: [],
      coins: 0,
      transactions: [],
      image: "male-user-avatar.svg",
      avtar: "male-user-avatar.svg",
    },
    token: null,
  };
};

export const checkExistingUserName = async (userName) => {
  return fetch(`${API_URL}/user/verify?userName=${userName}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      let resp = response.json();
      return resp;
    })
    .catch((err) => {
      console.log("Error: ", err);
      return { status: 500, error: "Something went wrong" };
    });
};

export const signUp = async (user) => {
  return fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  }).then(res => res.json())
    .then(json => {
      return {
        res: json,
        msg: "Thanks for signing up with us. Your account created successfully.",
      };
    }).catch((err) => {
      console.log("Error: ", err);
      return { status: 500, error: "Something went wrong" };
    });
};
// export const saveAuth = (data) => setCookies(JWT, data);
export const saveAuth = (data) => {
  const { isSignedIn, user, token } = data;
  if (!isSignedIn) {
    setCookies(JWT, { isSignedIn, token });
    return setItem(JWT, data);
  }

  setItem(JWT, { isSignedIn, token, user });
  setCookies(JWT, { isSignedIn, token });
};
// export const removeAuth = () => removeCookies(JWT);
export const removeAuth = () => {
  removeCookies(JWT);
  removeItem(JWT);
};

export const updateExternalLogin = async (user, token) => {
  return fetch(`${API_URL}/external-login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
      return { status: 500, error: "Something went wrong" };
    });
};

export const generateToken = (user) => {
  const SECRET_KEY = "atmegame@1234567890";
  return jwt.sign({ email: user.email }, SECRET_KEY);
};

export const updateUserLogin = async (authUser, tokenId) => {
  const location = await getLocation();
  const user = {
    email: authUser.email,
    name: authUser.name,
    picture: authUser.picture,
    firstName: authUser.given_name,
    lastName: authUser.family_name,
    userType: "google",
    country: location.countryCode,
  };

  const response = await updateExternalLogin(user, tokenId);
  if (response && response.user) {
    // updateCoinAfterLogin(response);
    response.user = formatUser(response.user);
  }
  return response;
};

export const forgotPassword = async (email) => {
  // https://atmeserv.atmegame.com/auth/recover
  return fetch(`${API_URL}/auth/recover`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  })
    .then((response) => {
      let res = response.json();
      if (res.success) {
        return {
          res,
          data: {
            msg: "we have sent you a link to reset your password.",
            emailSent: true,
          },
        };
      } else {
        return res;
      }
    })
    .catch((err) => {
      console.log("Error: ", err);
      return {
        status: 500,
        error: "Something went wrong",
      };
    });
};
