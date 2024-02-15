"use client";
import Card from "../ui/card/Card";
import CardHeader from "../ui/card/CardHeader";
import Content from "../ui/card/Content";
import CardContainer from "../ui/card/CardContainer";
import Shimmer_double_Row from "../common/shimmer/shimmer_double_Row";

export default function D({ isMobile, category }) {
  const gameClass = isMobile ? "gameTwo" : "gameSix";
  const numberOfGames = isMobile ? 6 : 12;

  if (!category) {
    return <Shimmer_double_Row gameTitle="Bike Games" />;
  }

  return (
    <>
      {/* <Shimmer_double_Row gameTitle="Bike Games" /> */}
      <CardContainer isContainerStyle={true}>
        <Card cardWidth="w100" cardColor="noShadow">
          <CardHeader
            slug={`online-${category.slug}-games`}
            title={`${category.name} Games`}
            iconName={category.slug}
          />
          <Content
            games={category.games}
            numberOfGames={numberOfGames}
            gameClass={gameClass}
          />
        </Card>
      </CardContainer>
    </>
  );
}
