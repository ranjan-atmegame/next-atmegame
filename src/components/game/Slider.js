"use client";
import { useRef, useState } from "react";
import CardHeader from "@/components/ui/card/CardHeader";
import CardContainer from "@/components/ui/card/CardContainer";
import SliderCard from "../ui/card/SliderCard";
import SliderItem from "../ui/card/SliderItem";
import styles from "@/components/ui/card/card.module.css";

export default function B({
  games,
  gameClass = "gameSevenCircleCategory",
  numberOfGames = 8,
  title = "Most Played Games",
  cardColorCls = "bgGreen",
  slug = "",
  margin = 12,
  slideNumber = 6,
  isHeader = false,
}) {
  const sliderRef = useRef();
  const [index, setIndex] = useState(0);
  if (!games?.length) {
    return <div>Loading</div>;
  }

  const nextImage = () => {
    if (index >= 30) {
      return false;
    }

    const clientWidth = sliderRef.current.children[index].clientWidth + margin;
    sliderRef.current.scrollLeft += clientWidth * slideNumber;

    // index++;
    setIndex((prevIndex) => prevIndex + slideNumber);
  };


  const prevImage = () => {
    if (index < 0) {
      return false;
    }

    const clientWidth = sliderRef.current.children[index].clientWidth + margin;
    sliderRef.current.scrollLeft -= clientWidth * slideNumber;
    // index--;
    setIndex((prevIndex) => prevIndex - slideNumber);
  };

  const maxLength = games.length !== 0 ? games.length - 7 : games.length;

  return (
    <CardContainer isContainerStyle={true}>
      {games.length !== 0 && (
        <SliderCard
          cardColor="scrollList_game"
          onNext={nextImage}
          onPrev={prevImage}
          index={index}
          total={maxLength}
        >
          {isHeader && (
            <CardHeader slug={`online-${slug}-games`} title={title} />
          )}
          <div
            className={`${styles.cardBody}`}
            style={{ scrollBehavior: "smooth" }}
            ref={sliderRef}
          >
            {games &&
              games.map((game) => (
                <SliderItem key={game._id} game={game} gameClass={gameClass} />
              ))}
          </div>
        </SliderCard>
      )}
    </CardContainer>
  );
}
