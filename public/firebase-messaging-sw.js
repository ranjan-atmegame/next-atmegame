self.addEventListener("install", () => {
  // Skip over the "waiting" lifecycle state, to ensure that our
  // new service worker is activated immediately, even if there's
  // another tab open controlled by our older service worker code.
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  // Optional: Get a list of all the current open windows/tabs under
  // our service worker's control, and force them to reload.
  // This can "unbreak" any open windows/tabs as soon as the new
  // service worker activates, rather than users having to manually reload.
  self.clients
    .matchAll({
      type: "window",
    })
    .then((windowClients) => {
      windowClients.forEach((windowClient) => {
        windowClient.navigate(windowClient.url);
      });
    });
});

//
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

// FOR TESTING ONLY
// firebase.initializeApp({
//   apiKey: 'AIzaSyCpD50Sn0oJpjBdc0RD-dgE1qYOrocVfJM',
//   authDomain: 'nextquiz-9469c.firebaseapp.com',
//   projectId: 'nextquiz-9469c',
//   storageBucket: 'nextquiz-9469c.appspot.com',
//   messagingSenderId: '1047052192813',
//   appId: '1:1047052192813:web:a434915f33988609f37ca4',
// });

firebase.initializeApp({
  apiKey: "AIzaSyBH-k2gbr1vIR9wKkGORejrLS18gPn8H3o",
  authDomain: "atmegame-44c67.firebaseapp.com",
  projectId: "atmegame-44c67",
  storageBucket: "atmegame-44c67.appspot.com",
  messagingSenderId: "642956286698",
  appId: "1:642956286698:web:29a1a7d92e929bb0ed9593",
  measurementId: "G-VX7TY7MDCT",
});

const messaging = firebase.messaging();
