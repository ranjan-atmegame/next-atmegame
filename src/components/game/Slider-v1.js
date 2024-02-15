import Card from "@/components/ui/card/Card";
import Content from "@/components/ui/card/Content";
import CardHeader from "@/components/ui/card/CardHeader";
import CardContainer from "@/components/ui/card/CardContainer";
import SliderCard from "../ui/card/SliderCard";
import { useRef, useState } from "react";

function Slider({
  games,
  gameClass = "gameThree",
  numberOfGames = 8,
  title = "Most Played Games",
  cardColorCls = "bgGreen",
  margin = 12,
  slideNumber = 6,
}) {
  const sliderRef = useRef();
  const [index, setIndex] = useState(0);

  const cardBody = {
    flexDirection: "row",
    overflowY: "hidden",
    overflowX: "scroll",
    flexWrap: "nowrap",
  };

  const nextImage = () => {
    if (index >= 30) {
      return false;
    }
    const clientWidth =
      sliderRef.current &&
      sliderRef.current.children[index].clientWidth + margin;
    sliderRef.current.scrollLeft += clientWidth * slideNumber;
    setIndex((prevIndex) => prevIndex + slideNumber);
  };

  const prevImage = () => {
    if (index < 0) {
      return false;
    }
    const clientWidth =
      sliderRef.current &&
      sliderRef.current.children[index].clientWidth + margin;
    sliderRef.current.scrollLeft -= clientWidth * slideNumber;
    setIndex((prevIndex) => prevIndex - slideNumber);
  };

  return (
    <CardContainer>
      <SliderCard
        cardColor="scrollList"
        onNext={nextImage}
        onPrev={prevImage}
        index={index}
      >
        <div
          className=""
          style={{ scrollBehavior: "smooth", cardBody }}
          ref={sliderRef}
        >
          <Card cardColor={cardColorCls} card>
            <CardHeader custom={true} isMoreBtn={false} title={title} />
            <Content
              games={games}
              gameClass={gameClass}
              numberOfGames={numberOfGames}
            />
          </Card>
        </div>
      </SliderCard>
    </CardContainer>
  );
}

export default Slider;
