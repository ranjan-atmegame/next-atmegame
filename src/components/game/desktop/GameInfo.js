"use client";
import { useEffect, useState } from "react";
import Card from "@/components/ui/card/Card";
import CardContainer from "@/components/ui/card/CardContainer";
import GameDetail from "@/components/game/details";
import { authenticate } from "@/api/auth";
import Ad from "@/components/ad";

function GameInfo({ rating, game }) {
  const [auth, setAuth] = useState();

  useEffect(() => {
    const auth = authenticate();
    setAuth(auth);
  }, []);

  return (
    <>
      <CardContainer isContainerStyle={true}>
        <Card cardWidth="w66" cardColor="noShadow">
          {auth && (
            <GameDetail
              game={game}
              rating={rating}
              auth={auth}
              isMobile={false}
            />
          )}
        </Card>
        <Ad cardWidth="w33" cardColor="gray" responsiveAd={true} />
      </CardContainer>
    </>
  );
}

export default GameInfo;
