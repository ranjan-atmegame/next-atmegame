"use client";
import React, { useState } from "react";
import styles from "@/components/common/ExpanCollpase/expanCollapse.module.css";
import useDevice from "@/hooks/useDevice";

export default function ExpanCollapseWidget({
  children,
  btnText = "",
  initHeight = 0,
  showViewBtn = true,
}) {
  const [collpase, setCollapse] = useState(true);
  const [mobile] = useDevice();

  const initialHeight = initHeight > 0 ? initHeight : mobile ? 145 : 128;

  function toggleCollpase() {
    setCollapse((preCollpase) => {
      updateMaxHeight(!preCollpase);
      return !preCollpase;
    });
  }

  function updateMaxHeight(collpase) {
    const expColList = document.querySelector(".expColList");
    const listHeight = expColList.scrollHeight;
    expColList.style.maxHeight = collpase
      ? `${initialHeight}px`
      : `${listHeight - 1}px`;
  }

  return (
    <div className={`${styles.expanCollpase} expanCollapseWidget`}>
      <div
        className={`${styles.list} expColList`}
        style={{ maxHeight: `${initialHeight}px` }}
      >
        {children}
      </div>
      {showViewBtn && (
        <div
          className={`${styles.btn} ${collpase ? styles.more : ""}`}
          onClick={toggleCollpase}
        >
          View {collpase ? "More" : "Less"} {btnText}
        </div>
      )}
    </div>
  );
}
