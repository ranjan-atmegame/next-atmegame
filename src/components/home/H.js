import { useRef, useState, useEffect } from "react";
import CardHeader from "@/components/ui/card/CardHeader";
import CardContainer from "@/components/ui/card/CardContainer";
import SliderCard from "../ui/card/SliderCard";
import CategoryItem from "../ui/card/CategoryItem";
import { API_URL } from "@/config";
import styles from "@/components/ui/card/card.module.css";
import Shimmer_singleRow_full from "../common/shimmer/shimmer_singleRow_full";

const margin = 12;
const slideNumber = 6;
export default function H({ gameClass = "gameSevenCircleCategory" }) {
  const sliderRef = useRef();
  const [index, setIndex] = useState(0);
  const [category, setCategory] = useState();

  const getMainCategory = async () => {
    const res = await fetch(
      `${API_URL}/category?isMainMenu=true&order=order:asc&limit=10`,
      {
        next: { revalidate: 7 * 24 * 60 * 60 },
      }
    );

    const response = await res.json();
    if (response.status !== "success") {
      return [];
    }

    return response.result;
  };

  useEffect(() => {
    getMainCategory().then((response) => {
      setCategory(response);
    });
  }, []);

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

  const maxLength = 7;
  if (!category) {
    // return <CardContainer>Loading...</CardContainer>;
    return (
      <Shimmer_singleRow_full
        gameTitle="Trending Categories"
        sectionColor="topGamesWhite"
      />
    );
  }

  return (
    <>
      <CardContainer topGames={false} topGamesWhite={true}>
        {category?.length !== 0 && (
          <SliderCard
            cardColor="scrollList"
            onNext={nextImage}
            onPrev={prevImage}
            index={index}
            total={maxLength}
          >
            <CardHeader
              slug="top"
              title="Trending Categories"
              isMoreBtn={false}
              iconName="hot"
            />

            <div
              className={`${styles.cardBody}`}
              style={{ scrollBehavior: "smooth" }}
              ref={sliderRef}
            >
              {category &&
                category.map((cat) => (
                  <CategoryItem
                    key={cat.slug}
                    category={cat}
                    gameClass={gameClass}
                  />
                ))}
            </div>
          </SliderCard>
        )}
      </CardContainer>
    </>
  );
}
