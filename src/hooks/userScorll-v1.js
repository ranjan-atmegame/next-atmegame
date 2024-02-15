"use client";
import { useState, useEffect } from "react";

let isSet = false;
let prevScroll = 0;
export default function useScroll({
  size = 100,
  interval = 10,
  totalCount = 5,
}) {
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
    const newScroll = parseInt(scrollY / size);
    isSet = totalCount > newScroll && newScroll > prevScroll ? false : true;

    if (!isSet) {
      isSet = true;
      prevScroll = newScroll;
      setYAxis((prevAxix) => prevAxix + interval);
    }
  };

  return yAxis;
}
