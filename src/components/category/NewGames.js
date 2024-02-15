import Card from "../ui/card/Card";
import CardHeader from "../ui/card/CardHeader";
import Content from "../ui/card/Content";
import CardContainer from "../ui/card/CardContainer";
import { shuffle } from "@/utils";
import Ad from "@/components/ad";

export default function NewGames({ category, newGames, isMobile, gameClass }) {
  let filterGames = isMobile
    ? newGames.filter((game) => game.isMobile)
    : newGames;
  newGames = filterGames.length ? filterGames : newGames;
  const shuffleGames = shuffle(newGames);
  const numberOfGames = 6;

  const categoryName = category.name !== "new" ? category.name : "";

  return (
    <>
      <CardContainer
        isContainerStyle={true}
        header={
          <CardHeader
            slug={category.slug}
            title={`New ${categoryName} Games`}
            isMoreBtn={false}
            iconName={category.slug}
          />
        }
      >
        <Card cardWidth="w66" cardColor="noShadow">
          <Content
            games={shuffleGames}
            numberOfGames={numberOfGames}
            gameClass={gameClass}
            priority={true}
          />
        </Card>

        {!isMobile && (
          <Ad cardWidth="w33" cardColor="gray" responsiveAd={true} />
        )}
      </CardContainer>
      {isMobile && <Ad cardColor="whiteAd" responsiveAd={true} />}
    </>
  );
}
