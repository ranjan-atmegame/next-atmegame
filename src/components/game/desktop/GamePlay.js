"use client";
import { useState, useEffect, useRef } from "react";
import { FullScreen } from "react-full-screen";
import { isValidUrl } from "@/utils";
import GameError from "./Error";

function GamePlay({ game, handle }) {
  const inputIframe = useRef(null);
  const [isGameLoaded, setIsGameLoaded] = useState(true);

  const { size, height, script } = game;

  useEffect(() => {
    if (!handle.active) {
      inputIframe.current.style.width = `${size}px`;
      inputIframe.current.style.height = `${height}px`;
      inputIframe.current.style.borderWidth = "0px";

      const isIFrame = script.indexOf("iframe") !== -1;
      const isCDN = script.indexOf("cdn.") !== -1;

      if (isIFrame) {
        const div = document.createElement("div");
        div.innerHTML = script;
        const iframe = div.querySelector("iframe");
        inputIframe.current.src = iframe.src;
        return 0;
      }
      if (!isCDN && !isValidUrl(script)) {
        setIsGameLoaded(false);
      }
    } else {
      inputIframe.current.style.width = `100%`;
      inputIframe.current.style.height = `100%`;
      window.scrollTo(0, 360);
    }
  }, [handle, height, size, script]);

  return (
    <FullScreen handle={handle}>
      {!isGameLoaded && <GameError />}
      <iframe
        title={game.name}
        id="gameframe"
        allowFullScreen
        data-hj-allow-iframe=""
        scrolling="no"
        src={script}
        style={{ width: "100%", height: "100%" }}
        ref={inputIframe}
      ></iframe>
    </FullScreen>
  );
}

export default GamePlay;
