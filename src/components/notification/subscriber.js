"use client";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { firebaseCloudMessaging } from "@/utils/Firebase";
import { API_URL } from "@/config";
import { getLocation } from "@/utils/Location";
import { isMobile } from "react-device-detect";

export const pushNotification = async () => {
  try {
    const messaging = getMessaging();
    const token = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPIDKEY,
    });

    if (token) {
      console.log("token", token);
      return await saveToTopic(token);
    }
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message:
        "The notification permission was not granted and blocked instead..",
    };
  }
};

export const subscribe = () => {
  // Event listener that listens for the push notification event in the background
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("message", (event) => {
      console.log("event for the service worker", event);
    });
  }

  // Calls the getMessage() function if the token is there
  async function setToken() {
    try {
      const token = await firebaseCloudMessaging.init();

      if (token) {
        console.log("token", token);
        getMessage();

        await saveToTopic(token);
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    } catch (error) {
      console.log("HERE...");
      console.log(error);
    }
  }

  // Get the push notification message and triggers a toast to display it
  function getMessage() {
    const messaging = getMessaging();

    //Verify message
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
    });
  }

  setToken();
};

export const saveToTopic = async (token) => {
  // API CALL
  const { countryCode, city, query } = await getLocation();
  const SITE_URL = window.location.origin.toString();

  let response = await fetch(`${API_URL}/notification`, {
    method: "POST",
    body: JSON.stringify({
      regid: token,
      domain: SITE_URL,
      url: SITE_URL,
      deviceid: isMobile ? 1 : 0,
      country: countryCode,
      city: city,
      ip: query,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  response = await response.json();

  if (response.status === "success") {
    return {
      status: "success",
      message: "User subscribed successfully.",
    };
  }

  return {
    status: "fail",
    message: "User already subscribed.",
  };
};
