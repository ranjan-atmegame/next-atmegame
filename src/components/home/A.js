import { getGamesByRow } from "@/api/home";
import Card from "../ui/card/Card";
import CardHeader from "../ui/card/CardHeader";
import Content from "../ui/card/Content";
import CardContainer from "../ui/card/CardContainer";
import Ad from "@/components/ad";
import { shuffle } from "@/utils";

export default async function A({ isMobile }) {
  const response = await getGamesByRow("a", isMobile);
  const [aCategory] = response;
  const gameClass = isMobile ? "gameTwo" : "gameThree";

  const mobileJSX = () => {
    return (
      <>
        <CardContainer
          isContainerStyle={true}
          header={
            <CardHeader
              slug={`online-${aCategory.slug}-games`}
              title={`${aCategory.name} Games`}
              iconName={aCategory.slug}
            />
          }
        >
          <Card cardWidth="w66" cardColor="noShadow">
            <Content
              games={shuffle(aCategory.games)}
              gameClass={gameClass}
              numberOfGames={6}
              priority={true}
            />
          </Card>
        </CardContainer>

        <Ad cardColor="gray" responsiveAd={true} />
      </>
    );
  };

  const webJSX = () => {
    return (
      <CardContainer
        isContainerStyle={true}
        header={
          <CardHeader
            slug={`online-${aCategory.slug}-games`}
            title={`${aCategory.name} Games`}
            iconName={aCategory.slug}
          />
        }
      >
        <Card cardWidth="w66" cardColor="noShadow">
          <Content
            games={shuffle(aCategory.games)}
            gameClass={gameClass}
            numberOfGames={6}
            priority={true}
          />
        </Card>
        <Ad cardWidth={"w33"} cardColor="gray" responsiveAd={true} />
      </CardContainer>
    );
  };

  return isMobile ? mobileJSX() : webJSX();
}
