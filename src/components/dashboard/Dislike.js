"use client";
import { useState, useEffect } from "react";
import { userDislikedGames } from "@/api/user";
import Card from "@/components/ui/card/Card";
import CardHeader from "@/components/ui/card/CardHeader";
import Content from "@/components/ui/card/Content";
import CardContainer from "@/components/ui/card/CardContainer";
import { getDashboardConfig } from "./config";

export default function Dislike({ auth: { token }, isMobile }) {
  const [games, setGames] = useState([]);
  const { gameClass, numberOfGames } = getDashboardConfig(isMobile);

  useEffect(() => {
    userDislikedGames(token, 0, numberOfGames).then((dislikes) => {
      setGames(dislikes);
    });
  }, []);

  return (
    <CardContainer
      isContainerStyle={true}
      header={<CardHeader slug={``} title="Disliked Games" isMoreBtn={false} />}
    >
      <Card cardWidth="w100" cardColor="noShadow">
        <Content
          games={games}
          gameClass={gameClass}
          numberOfGames={numberOfGames}
          priority={true}
        />
      </Card>
    </CardContainer>
  );
}
