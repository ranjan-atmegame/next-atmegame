import { useState, useRef } from "react";
import styles from "./backFullscreen.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
const BackFullscreen = ({
  handle,
  slug,
  backArrow = "/img/backArrowOrange.svg",
  logo = "https://www.atmegame.com/img/logo-icon.png",
  dragIcon = "/img/drag-and-drop.svg",
  setHasHash
}) => {

  const dragRef = useRef();
  const router = useRouter();

  const [state, setState] = useState({
    initialClientYPos: 0,
    currentClientYPos: 0,
  })


  function closeFullScreen() {
    handle.exit();
    router.push(slug);
    setHasHash(false)
  }

  function selectItem(e) {
    let initialClientYPos = e.targetTouches[0].clientY;
    setState(prev => ({ ...prev, initialClientYPos }))
  }

  function moveItemStart(e) {
    const el = dragRef.current;
    let clientY = e.targetTouches[0].clientY;
    let boxHeight = document.getElementsByClassName("play-game-mobile")[0].clientHeight - 37;
    let currentClientYPos = state.initialClientYPos - clientY;
    setState(prev => ({ ...prev, currentClientYPos, initialClientYPos: clientY }));
    let movingPixles = el.offsetTop - state.currentClientYPos;
    let top = 0;
    if (movingPixles <= 0) {
      top = 0;
    } else if (movingPixles > boxHeight) {
      top = boxHeight
    } else {
      top = movingPixles
    }
    el.style.top = `${top}px`
  }

  return (
    <div
      className={`${styles.backWrapper} ${styles.draggable}`}
      onClick={closeFullScreen}
      onTouchStart={(e) => selectItem(e)}
      onTouchMove={(e) => moveItemStart(e)}
      ref={dragRef}
      id="backBtnFullScreenOnMobi"
    >
      <div className={styles.content}>
        <div className={styles.backIcon}>
          <Image
            width={18}
            height={18}
            alt="back-arrow"
            src={backArrow}
            unoptimized={true}
          />
        </div>
        <div className={styles.atmeLogo}>
          <Image
            width={24}
            height={24}
            alt="atmegame-logo"
            src={logo}
            unoptimized={true}
          />
        </div>
        <div className={styles.drag}>
          <Image
            width={10}
            height={24}
            alt="drag-drop-icon"
            src={dragIcon}
            unoptimized={true}
          />
        </div>
      </div>
    </div>
  );
};

export default BackFullscreen;
