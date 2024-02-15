"use client";
import Card from "../ui/card/Card";
import CardHeader from "../ui/card/CardHeader";
import Content from "../ui/card/Content";
import CardContainer from "../ui/card/CardContainer";
import D from "./D";
import useRowGame from "@/hooks/useRowGame";
import Ad from "@/components/ad";
import Shimmer_col_Three from "../common/shimmer/shimmer_col_Three";

export default function C({ isMobile }) {
  const [response, isLoading] = useRowGame("c");
  const gameClass = "gameTwo";
  const numberOfGames = 4;

  if (isLoading) {
    return <Shimmer_col_Three gameTitle="Cricket Games" />;
  }

  const [cCategory, dCategory] = response;

  const mobileJSX = () => {
    return (
      <>
        <CardContainer
          isContainerStyle={true}
          header={
            <CardHeader
              slug={`online-${cCategory.slug}-games`}
              title={`${cCategory.name} Games`}
              iconName={cCategory.slug}
            />
          }
        >
          <Card cardWidth="w33" cardColor="noShadow">
            <Content games={cCategory.games.slice(0, 1)} gameClass="gameOne" />
          </Card>
          <Card cardWidth="w33" cardColor="noShadow">
            <Content
              games={cCategory.games.slice(1, numberOfGames + 1)}
              numberOfGames={4}
              gameClass={gameClass}
            />
          </Card>
        </CardContainer>
        <CardContainer>
          <Ad cardWidth="w33" cardColor="gray" responsiveAd={true} />
        </CardContainer>
      </>
    );
  };

  const webJSX = () => {
    return (
      <CardContainer
        isContainerStyle={true}
        header={
          <CardHeader
            slug={`online-${cCategory.slug}-games`}
            title={`${cCategory.name} Games`}
            iconName={cCategory.slug}
          />
        }
      >
        <Card cardWidth="w33" cardColor="noShadow">
          <Content games={cCategory.games.slice(0, 1)} gameClass="gameOne" />
        </Card>
        <Card cardWidth="w33" cardColor="noShadow">
          <Content
            games={cCategory.games.slice(1, numberOfGames + 1)}
            numberOfGames={4}
            gameClass={gameClass}
          />
        </Card>
        <Ad cardWidth="w33" cardColor="gray" responsiveAd={true} />
      </CardContainer>
    );
  };

  return (
    <>
      {isMobile ? mobileJSX() : webJSX()}
      <D category={dCategory} isMobile={isMobile} />
    </>
  );
}
