"use client";
import { useState, useEffect } from "react";

let isSet = false;
let prevScroll = 0;
export default function useScroll({ size = 75, interval = 1, totalCount = 5 }) {
  const [yAxis, setYAxis] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", getGamesOnScroll);

    return () => {
      isSet = false;
      prevScroll = 0;
      window.removeEventListener("scroll", getGamesOnScroll);
    };
  }, []);

  const getGamesOnScroll = () => {
    const scrollY = window.scrollY;
    const newScrollY = parseInt(scrollY / size);
    isSet = totalCount > yAxis && newScrollY > prevScroll ? false : true;

    if (!isSet && totalCount > newScrollY && newScrollY > prevScroll) {
      isSet = true;
      prevScroll += 1;
      setYAxis((prevAxis) => prevAxis + interval);
    } else if (!isSet && newScrollY >= totalCount) {
      setYAxis(totalCount);
    }
  };

  return yAxis;
}
