import SitemapPage from "@/components/sitemap";
import { getRobot } from "../server";

export async function generateMetadata() {
  const { robots, host } = getRobot(true);
  const canonical = host + "/sitemap";

  return {
    title: "Sitemap : Atmegame.com",
    description:
      "Free online games & play games at Atmegame - A new game every day - Play action games, arcade games, girls games, adventure games and sports game and more!.",
    keywords: ["Sitemap", "atmegame.com"],
    metadataBase: new URL("https://www.atmegame.com"),
    alternates: {
      canonical,
    },
    robots,
  };
}

export default async function Sitemap() {
  return <SitemapPage />;
}
