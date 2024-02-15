import Card from "@/components/ui/card/Card";
import CardContainer from "@/components/ui/card/CardContainer";
import Ad from "@/components/ad";

import GameDetail from "@/components/game/details";

function GameInfo({ rating, game }) {
  const auth = { isSignedIn: false, user: {} };

  return (
    <>
      <CardContainer>
        <Card cardWidth="w66" cardColor="darkBlue">
          <GameDetail game={game} rating={rating} auth={auth} />
        </Card>
        <Ad cardWidth="w33" cardColor="noBorder" responsiveAd={true} />
      </CardContainer>
    </>
  );
}

export default GameInfo;
