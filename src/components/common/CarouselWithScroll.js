"use client";
import { useRef, useState } from "react";
import carouselStyles from "@/components/common/carouselwithscroll.module.css";
import cardStyle from "@/components/ui/card/card.module.css";
import commonStyle from "@/components/layout/common.module.css";
import listStyles from "@/components/ui/card/item.module.css";
import Link from "next/link";
import useDevice from "@/hooks/useDevice";

import { IMAGE_PATH_NEW, SLIDES_IMG_PATH } from "@/utils/Constants";
import GameImage from "@/components/ui/images/Icon";
import CardHeader from "@/components/ui/card/CardHeader";

const styles = {
  ...cardStyle,
  ...commonStyle,
  ...carouselStyles,
  ...listStyles,
};

export default function CarouselWithScroll({
  items = [],
  title = "Most Played Games",
  moreBtn = false,
  custom = false,
  gameClass = "gameSeven",
  itemsToShow = "8",
  cardWidth = "",
  cardColor = "white",
  iconH = 24,
  iconW = 12,
  itemsToMove = 2,
  margin = 12,
  circleCls = "",
  priority = false,
  lazy = "lazy",
  iconName = "",
  cardHead = true,
  imgCls = "",
}) {
  cardWidth = cardWidth ? styles[cardWidth] : "";
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobile] = useDevice();
  const device = mobile ? "mobile" : "desktop";

  let totalCard = items && items.length == 10 ? 11 : items.length;
  const nextBtnToggle = totalCard !== 0 ? totalCard - itemsToShow : totalCard;

  function slideCarousel(type) {
    if (carouselRef.current) {
      let cardWidth =
        carouselRef.current &&
        carouselRef.current.children[0].clientWidth + margin;
      if (type == "next") {
        carouselRef.current.scrollLeft += cardWidth * itemsToMove;
      } else {
        carouselRef.current.scrollLeft -= cardWidth * itemsToMove;
      }
    }
    let move = type == "next" ? parseInt(itemsToMove) : -parseInt(itemsToMove);
    setCurrentIndex((prevIndex) => prevIndex + move);
  }

  return (
    <div className={styles.carouselMain}>
      <div className={`${styles.column} ${cardWidth} ${styles.carousel}`}>
        <div className={`${styles.card} ${styles[cardColor]}`}>
          {cardHead && (
            <CardHeader
              custom={custom}
              isMoreBtn={moreBtn}
              title={title}
              iconName={iconName}
            />
          )}
          {currentIndex > 0 && (
            <div
              className={`${styles.crslBtn} ${styles.leftBtn}`}
              onClick={() => slideCarousel("prev")}
            >
              <GameImage
                src="/img/leftArrowBlack.svg"
                alt="back"
                height={iconH}
                width={iconW}
                priority={priority}
                lazy={lazy}
                unoptimized={true}
              />
            </div>
          )}
          <div style={{ overflow: "hidden" }}>
            <ul
              ref={carouselRef}
              className={`${styles.overFlowX} ${styles.srcollBar} ${styles.carouselInner}`}
            >
              {items &&
                Array.isArray(items) &&
                items.length > 0 &&
                items.map((item, i) => {
                  const name = `Play Online ${item.name} Games`;
                  const src =
                    item && item.name
                      ? `${IMAGE_PATH_NEW}cat/${item.name.toLowerCase()}.png`
                      : "/img/noGameImage";
                  let img = item.icon
                    ? src
                    : `${SLIDES_IMG_PATH}${device}/${item.image}_slide.jpg`;
                  let url = item.icon
                    ? `/online-${item.slug}-games`
                    : `/games/${item.slug}`;

                  return (
                    <li
                      key={i}
                      className={`${styles.slideItem} ${styles[gameClass]} ${styles[circleCls]}`}
                      style={{ width: `${100 / itemsToShow}%` }}
                      id={item.name}
                    >
                      <Link
                        prefetch={false}
                        href={url}
                        className={`${styles.gameCardImg} ${styles.carouselSlide}`}
                      >
                        <div
                          className={`${styles.imgwrapper} ${styles[imgCls]}`}
                        >
                          <GameImage
                            src={img}
                            className=""
                            width="395"
                            height="120"
                            title={name}
                            alt={name}
                            priority={priority}
                            unoptimized={true}
                            lazy={lazy}
                          />
                        </div>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
          {currentIndex < nextBtnToggle && (
            <div
              className={`${styles.crslBtn} ${styles.rightBtn}`}
              onClick={() => slideCarousel("next")}
            >
              <GameImage
                src="/img/rightArrowBlack.svg"
                alt="back"
                height={iconH}
                width={iconW}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
