"use client";
import { useState, useEffect } from "react";
import { dashboardData } from "@/api/user";
import Card from "@/components/ui/card/Card";
import CardHeader from "@/components/ui/card/CardHeader";
import Content from "@/components/ui/card/Content";
import CardContainer from "@/components/ui/card/CardContainer";
// import { getDashboardConfig } from "./config";
import CoinList from "./CoinList";
import LeaderboardDetail from "./LeaderboardDetails";

export default function Liked({ auth: { token }, isMobile }) {
  const [games, setGames] = useState([]);
  const [dashboard, setDashboard] = useState({
    transactions: [],
  });
  //   const { gameClass, numberOfGames } = getDashboardConfig(isMobile);
  const gameClass = "gameFour";
  const numberOfGames = 4;

  useEffect(() => {
    dashboardData(token).then((data) => {
      setDashboard(data);
    });
  }, []);

  const { recommendGames, transactions, likes, favourite, totalPlayed } =
    dashboard;

  //Fetch last three records from transaction
  let lastThreeTransaction =
    transactions.length <= 3
      ? transactions
      : transactions.slice(transactions.length - 3, transactions.length);

  return (
    <>
      <CardContainer>
        <Card cardWidth="w66" cardColor="noShadow">
          <CardHeader slug={``} title="Games for you" isMoreBtn={false} />
          <Content
            games={recommendGames}
            gameClass={gameClass}
            numberOfGames={numberOfGames}
            priority={true}
          />
        </Card>

        <Card cardWidth="w33" cardColor="noShadow">
          <CardHeader slug={``} title="Coins" isMoreBtn={false} />
          <CoinList transactions={lastThreeTransaction} showAllLink={true} />
        </Card>
      </CardContainer>
      <CardContainer>
        <Card cardWidth="w66" cardColor="noShadow">
          <CardHeader slug={``} title="Liked Games" isMoreBtn={false} />
          <Content
            games={likes}
            gameClass={gameClass}
            numberOfGames={numberOfGames}
            priority={true}
          />
        </Card>
        <Card cardWidth="w33" cardColor="noShadow">
          <CardHeader slug={``} title="Leaderboard" isMoreBtn={false} />
          <LeaderboardDetail token={token} />
        </Card>
      </CardContainer>
      <CardContainer>
        <Card cardWidth="w66" cardColor="noShadow">
          <CardHeader slug={``} title="Favourite Games" isMoreBtn={false} />
          <Content
            games={favourite}
            gameClass={gameClass}
            numberOfGames={numberOfGames}
            priority={true}
          />
        </Card>
      </CardContainer>
      <CardContainer>
        <Card cardWidth="w66" cardColor="noShadow">
          <CardHeader slug={``} title="Total Games Played" isMoreBtn={false} />
          <Content
            games={totalPlayed}
            gameClass={gameClass}
            numberOfGames={numberOfGames}
            priority={true}
          />
        </Card>
      </CardContainer>
    </>
  );
}
