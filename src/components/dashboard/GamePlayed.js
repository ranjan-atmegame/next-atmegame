"use client";
import { useState, useEffect } from "react";
import { userGamePlayed } from "@/api/user";
import Card from "@/components/ui/card/Card";
import CardHeader from "@/components/ui/card/CardHeader";
import Content from "@/components/ui/card/Content";
import CardContainer from "@/components/ui/card/CardContainer";
import { getDashboardConfig } from "./config";

export default function GamePlayed({ auth: { token }, isMobile }) {
  const [games, setGames] = useState([]);
  const { gameClass, numberOfGames } = getDashboardConfig(isMobile);

  useEffect(() => {
    userGamePlayed(token, 0, numberOfGames).then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <CardContainer
      isContainerStyle={true}
      header={
        <CardHeader
          iconName="top"
          slug={``}
          title="Games Played"
          isMoreBtn={false}
        />
      }
    >
      <Card cardWidth="w100" cardColor="noShadow">
        <Content
          games={games}
          gameClass={gameClass}
          numberOfGames={games?.length}
          priority={true}
        />
      </Card>
    </CardContainer>
  );
}
