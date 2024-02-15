"use client";
import { useEffect, useRef } from "react";
import Item from "@/components/search/Item";
import { SLIDES_IMG_PATH } from "@/utils/Constants";
import styles from "@/components/search/weeklyTopGame.module.css";
import useDevice from "@/hooks/useDevice";

let mouseDown = false;
let startX, scrollLeft;
export default function Slider({
  heading,
  className,
  games,
  hideSearchPopupCB,
  isMobile,
}) {
  const parentRef = useRef();
  const categoryRef = useRef();
  const [mobile] = useDevice();
  const device = mobile ? "mobile" : "desktop";

  useEffect(() => {
    if (!isMobile) {
      parentRef.current.addEventListener("mousedown", startDragging, false);
      parentRef.current.addEventListener("mouseup", stopDragging, false);
      parentRef.current.addEventListener("mouseleave", stopDragging, false);
      parentRef.current.addEventListener("mousemove", moveCategory);

      return () => {
        parentRef.current?.addEventListener("mousedown", startDragging, false);
        parentRef.current?.addEventListener("mouseup", stopDragging, false);
        parentRef.current?.addEventListener("mouseleave", stopDragging, false);
        parentRef.current?.addEventListener("mousemove", moveCategory);
      };
    }
  }, [isMobile]);

  const moveCategory = (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }

    const x = e.pageX - parentRef.current.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    parentRef.current.scrollLeft = scrollLeft - walk;
  };

  const startDragging = (e) => {
    e.preventDefault();
    mouseDown = true;
    startX = e.pageX - parentRef.current.offsetLeft;
    scrollLeft = parentRef.current.scrollLeft;
  };

  const stopDragging = (e) => {
    e.preventDefault();
    mouseDown = false;
  };

  return (
    <div className={styles.innerGame}>
      <h2>{heading}</h2>
      <div className={className} ref={parentRef}>
        <ul ref={categoryRef}>
          {games.map((item) => (
            <Item
              key={item.name}
              name={item.name}
              hideSearchPopupCB={hideSearchPopupCB}
              slug={`/games/${item.slug}`}
              title={item.name}
              alt={item.name}
              height={100}
              width={120}
              icon={`${SLIDES_IMG_PATH}${device}/${item.image}_slide.jpg`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
