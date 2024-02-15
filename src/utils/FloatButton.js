"use client";
import styles from "@/components/common/floatbutton.module.css";
import Icon from "@/components/ui/images/Icon";
import { useEffect, useState } from "react";
export default function FloatButton({
  img = "https://www.atmegame.com/img/back-to-top.svg",
}) {
  const [scrollPos, setScrollPos] = useState(0);

  function MoveToTop() {
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", getScrolledPos);
    return () => {
      window.removeEventListener("scroll", getScrolledPos);
    };
  }, []);

  function getScrolledPos() {
    let scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;
    setScrollPos(scrollPos);
  }

  if (scrollPos >= 450) {
    return (
      <div className={styles.floatBtn} onClick={MoveToTop}>
        <Icon src={img} height={24} width={24} alt="float-Btn" />
      </div>
    );
  } else return null;
}
