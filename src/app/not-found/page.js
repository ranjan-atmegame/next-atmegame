import CardContainer from "@/components/ui/card/CardContainer";
import NotFound from "@/components/not-found/not-found";
import { topWeeklyGamesSearch } from "@/api/search";
import { getRobot } from "@/app/server";

export async function generateMetadata() {
  const { robots, host } = getRobot(true);
  return {
    title: "Error 404 - Page not found",
    description: "Error 404 - Page not found",
    keywords: ["404"],
    robots,
  };
}

export default async function NotFoundPage() {
  const topWeeklyGames = await topWeeklyGamesSearch();
  return (
    <CardContainer isContainerStyle={true}>
      <NotFound games={topWeeklyGames?.result} />
    </CardContainer>
  );
}
