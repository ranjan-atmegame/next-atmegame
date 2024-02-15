import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { FullScreen } from "react-full-screen";
// import DeviceOrientation, { Orientation } from "react-screen-orientation";
import GameModal from "@/components/modal";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function Play({ game, handle }) {
  const inputIframe = useRef(null);
  const [width, height] = useWindowSize();

  // const { handle, game } = props;
  // const gameOrientation = game.orientation === "L" ? "landscape" : "portrait";

  // useEffect(() => {
  //   if (inputIframe.current) {
  //     console.log("Game resized...");
  //     console.log(window.screen.availHeight, window.screen.availWidth);
  //     inputIframe.current.style.width = `${width}px`;
  //     inputIframe.current.style.height = `${height}px`;
  //     inputIframe.current.style.borderWidth = "0px";

  //     console.log("Gameorientation: ", gameOrientation);
  //     // if (
  //     //   gameOrientation === "landscape" &&
  //     //   !window.screen.orientation.type.includes(gameOrientation)
  //     // ) {
  //     //   console.log("change orientation...");
  //     //   window.screen.orientation.unlock();
  //     //   window.screen.orientation
  //     //     .lock("landscape-primary")
  //     //     .then(() => console.log("Changed orientation to landscape"))
  //     //     .catch((error) => console.log(error));
  //     // }
  //   }
  // }, [width, height, gameOrientation]);

  return (
    <GameModal>
      <FullScreen handle={handle}>
        <iframe
          title={game?.name}
          id="gameframe"
          allowFullScreen
          // allow="allow"
          // data-hj-allow-iframe=""
          scrolling="no"
          src={game?.script}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            borderWidth: "0px",
          }}
          ref={inputIframe}
        ></iframe>
      </FullScreen>
    </GameModal>
  );
}
