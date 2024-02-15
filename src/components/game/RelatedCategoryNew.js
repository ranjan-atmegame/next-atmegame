import { useState, useEffect } from "react";
import { fetchGameRelatedCategory } from "@/api/category";
import CarouselWithScroll from "@/components/common/CarouselWithScroll";

export default function RelatedCategoryNew({
  categoryId,
  isMobile,
  circleCls = "circularCard",
  gameClass = "",
  title = "Related Categories",
  iconName="similarGames"
}) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetchGameRelatedCategory(categoryId).then((response) => {
      if (response.result) {
        setCategory(response.result);
      }
    });
  }, [categoryId]);

  const categoryByDevice = isMobile ? category : category.slice(0, 10);

  return (
    category?.length !== 0 && (
      <CarouselWithScroll
        items={categoryByDevice}
        title={title}
        moreBtn={false}
        circleCls={circleCls}
        gameClass={gameClass}
        itemsToShow={isMobile ? "3" : "9"}
        slug=""
        cardColor="noShadow"
        iconName={iconName}
      />
    )
  );
}
