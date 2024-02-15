"use client";
import { useState, useEffect } from "react";
import { userLikedGames } from "@/api/user";
import Card from "@/components/ui/card/Card";
import CardHeader from "@/components/ui/card/CardHeader";
import Content from "@/components/ui/card/Content";
import CardContainer from "@/components/ui/card/CardContainer";
import { getDashboardConfig } from "./config";

export default function Liked({ auth: { token }, isMobile }) {
  const [games, setGames] = useState([]);
  const { gameClass, numberOfGames } = getDashboardConfig(isMobile);

  useEffect(() => {
    userLikedGames(token, 0, numberOfGames).then((likes) => {
      setGames(likes);
    });
  }, []);

  return (
    <CardContainer
      isContainerStyle={true}
      header={
        <CardHeader
          iconName="top-liked"
          slug={``}
          title="Liked Games"
          isMoreBtn={false}
        />
      }
    >
      <Card cardWidth="w100" cardColor="noShadow">
        <Content
          games={games}
          gameClass={gameClass}
          numberOfGames={10}
          priority={true}
        />
      </Card>
    </CardContainer>
  );
}
