"use client";
import style from "./shimmer.module.css";

const MiniShimmer = ({ numberOfLine = 2 }) => {
  return (
    <div className={style.miniShimeer}>
      <div className={style.miniBox}></div>

      {[...Array(numberOfLine).keys()].map((va, index) => (
        <div key={index} className={style.miniList}></div>
      ))}
    </div>
  );
};

export default MiniShimmer;
