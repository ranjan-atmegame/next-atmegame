"use client";
import { useRef, useState } from "react";
import CardHeader from "@/components/ui/card/CardHeader";
import CardContainer from "@/components/ui/card/CardContainer";
import SliderCard from "../ui/card/SliderCard";
import SliderItem from "../ui/card/SliderItem";
import styles from "@/components/ui/card/card.module.css";
import useRowGame from "@/hooks/useRowGame";
import Shimmer_singleRow_full from "../common/shimmer/shimmer_singleRow_full";

const margin = 12;
const slideNumber = 6;
export default function B({ isMobile, gameClass = "gameSeven" }) {
  const sliderRef = useRef();
  const [index, setIndex] = useState(0);
  const [response, isLoading] = useRowGame("b");
  if (isLoading) {
    // return <div>Loading</div>;
    return (
      <Shimmer_singleRow_full gameTitle="Top Games" sectionColor="topGames" />
    );
  }

  const [category] = response;

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

  const { games } = category;
  const maxLength = games.length !== 0 ? games.length - 7 : games.length;

  return (
    <>
      {/* <Shimmer_singleRow_full gameTitle="Top Games" sectionColor="topGames" /> */}
      <CardContainer topGames={true}>
        {games.length !== 0 && (
          <SliderCard
            cardColor="scrollList"
            onNext={nextImage}
            onPrev={prevImage}
            index={index}
            total={maxLength}
          >
            <CardHeader
              slug={`online-${category.slug}-games`}
              title={`${category.name} Games`}
              headingColor="headerWhite"
              iconName={category.slug}
            />

            <div
              className={`${styles.cardBody}`}
              style={{ scrollBehavior: "smooth" }}
              ref={sliderRef}
            >
              {games &&
                games.map((game) => (
                  <SliderItem
                    key={game._id}
                    game={game}
                    gameClass={gameClass}
                    specialDevice="desktop"
                  />
                ))}
            </div>
          </SliderCard>
        )}
      </CardContainer>
    </>
  );
}
