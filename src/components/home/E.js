"use client";
import Card from "../ui/card/Card";
import CardHeader from "../ui/card/CardHeader";
import Content from "../ui/card/Content";
import CardContainer from "../ui/card/CardContainer";
import F from "./F";
import useRowGame from "@/hooks/useRowGame";
import Shimmer_col_Two from "../common/shimmer/shimmer_col_Two";

export default function E({ isMobile }) {
  const [response, isLoading] = useRowGame("d");
  const gameClass = isMobile ? "gameTwo" : "gameFour";
  const numberOfGames = isMobile ? 4 : 8;

  if (isLoading) {
    return <Shimmer_col_Two gameTitle="Bike Games" />;
  }

  const [eCategory, fCategory] = response;

  return (
    <>
      {/* <Shimmer_col_Two gameTitle="Sports Games" /> */}
      <CardContainer
        isContainerStyle={true}
        header={
          <CardHeader
            slug={`online-${eCategory.slug}-games`}
            title={`${eCategory.name} Games`}
            iconName={eCategory.slug}
          />
        }
      >
        <Card cardWidth="w33" cardColor="noShadow">
          <Content games={eCategory.games.slice(0, 1)} gameClass="gameOne" />
        </Card>
        <Card cardWidth="w66" cardColor="noShadow">
          <Content
            games={eCategory.games.slice(1, numberOfGames + 1)}
            numberOfGames={numberOfGames}
            gameClass={gameClass}
          />
        </Card>
      </CardContainer>
      <F category={fCategory} isMobile={isMobile} />
    </>
  );
}
