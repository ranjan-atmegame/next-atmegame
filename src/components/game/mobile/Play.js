"use client";
import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { FullScreen } from "react-full-screen";
import BackFullscreen from "@/components/ui/backFullscreen/backFullscreen";
import GameModal from "@/components/modal";
import { mobileModel } from "react-device-detect";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      const h = window.innerHeight;
      const w = window.innerWidth;
      setSize([w, h]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}


export default function Play({
  game,
  handle,
  slug,
  deviceClass = "play-game-mobile",
  setHasHash,
  parentCls = ""
}) {
  const inputIframe = useRef(null);
  const [width, height] = useWindowSize();

  useEffect(() => {
    setTimeout(() => {
      screenInLandscapeMode();
    }, 100);
  }, []);


  function screenInLandscapeMode() {
    document.body.classList.add("mode360");
    // console.log("method HIT")
    const box = document.querySelector("#fullScreenGame");
    if (box) {
      if (document.documentElement.requestFullscreen)
        box.requestFullscreen();
      else if (document.documentElement.webkitRequestFullScreen)
        box.webkitRequestFullScreen();
      if (screen.orientation.lock && mobileModel !== "iPhone" && game.orientation === "L") {
        screen.orientation.lock("landscape-primary").then(() => {
          // console.log("success-orientation change");
          // document.body.classList.add("mode360");
        }).catch(function (error) {
          // alert(error);
          console.log(error, "error-orientation")
        });
      }
    }
  }

function gameIframe() {
    return (
      <iframe
        title={game.name}
        id="gameframe"
        allowFullScreen
        data-hj-allow-iframe=""
        scrolling="no"
        src={`${game.script}?dw16`}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          borderWidth: "0px",
        }}
        ref={inputIframe}
      >
      </iframe>
    );
  }


  return (
    <GameModal closeIcon={false} modalCls="mobileFullViewGame" parentCls={parentCls}>
      {/* <BackFullscreen handle={handle} slug={slug} setHasHash={setHasHash} /> */}
      <div id="fullScreenGame">
        {gameIframe()}
      </div>
      {/*<FullScreen handle={handle} className={deviceClass} id="mobiFullScreen">
        {gameIframe()}
        </FullScreen> */}
    </GameModal>
  );
}
