import { useEffect } from "react";

const Walkthrough = ({ game }) => {
  useEffect(() => {
    var playerInstance;
    var settings = {
      container: "videoContainer",
      gameId: game.name, //it is an unique value
      publisherId: "21412b90c95c494b8a6f7817540a363d",
      width: "100%",
      height: "480px",
      title: game.name, //you have to type your game title here we need for matching game video
      // category: game.categoryId.name, // game category
      langCode: "en-us",
      autoplay: "no",
      onFound: function (data) {
        // console.log(data);
      },
      onError: function (data) {
        // console.log(data);
      },
      onReady: function (player) {
        // Keep player instance to control it later like play or pause player
        // available controls:
        //                 // player.play() or player.play([seek time]);
        // You can jump a time (second *optional) of video.
        // player.pause();                 // player.setVolume(0.5);
        // Value should be between 0.0 and 1.0
        // console.log(player);

        playerInstance = player; // Set player instance
      },
    };

    (function (i, s, o, g, r, a, m) {
      i["VooxeVideo"] = r;
      i[r] =
        i[r] ||
        function () {
          (i[r].q = i[r].q || []).push(arguments);
        };
      i[r].l = 1 * new Date();
      a = s.createElement(o);
      m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      "script",
      "//video-static.vooxe.com/libs/gd/gd.js",
      "gdPlayer"
    );
    window.gdPlayer(settings);
    play(playerInstance);
  }, [game]);

  function play(playerInstance) {
    if (playerInstance != null) {
      playerInstance.play(0);
    }
  }

  return (
    <div className="tab-one-content" style={{ width: "100%" }}>
      <div id="videoContainer"></div>
    </div>
  );
};

export default Walkthrough;
