import SubmitGameForm from "@/components/submitGame/Index";
import { getRobot } from "../server";

export async function generateMetadata() {
  const { robots, host } = getRobot(true);
  const canonical = host + "/submit-game";

  return {
    title: "Submit & Publish Your Online Games, HTML5 Games at Atmegame.com",
    description:
      "Atmegame also takes a direct publish and submits a game from those who want to promote their online games, HTML5 games on atmegame.com",
    keywords: ["submit games", "atmegame.com"],
    metadataBase: new URL("https://www.atmegame.com"),
    alternates: {
      canonical,
    },
    robots,
  };
}

export default function SubmitGame() {
  return (
    <div>
      <SubmitGameForm />
    </div>
  );
}
