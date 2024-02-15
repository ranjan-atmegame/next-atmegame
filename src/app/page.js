import dynamic from "next/dynamic";
import Ad from "@/components/ad";
import A from "@/components/home/A";

const B = dynamic(() => import("@/components/home/B"));
const Home = dynamic(() => import("@/components/home"));
// import B from "@/components/home/B";
// import Home from "@/components/home";
import { getDevice, getRobot } from "./server";
import { S3_IMAGE_PATH } from "@/config";
// import CardContainer from "@/components/ui/card/CardContainer";

export async function generateMetadata() {
  const { robots, host: canonical } = getRobot(true);

  return {
    title:
      "Play Free Online Games, Best Online Browser Games Without Downloading - Atmegame.com",
    description:
      "Play free online browser games without downloading. Atmegame.com bring you the best online HTML5 games  of different category including cricket, racing, action, adventure, sports, girls, dress up, puzzle, arcade and fighting games",
    keywords: [
      "play online games, play free online games, free games, best online game, best online free games",
    ],
    metadataBase: new URL("https://www.atmegame.com"),
    alternates: {
      canonical,
    },
    robots,
    openGraph: {
      type: "website",
      title: "Play Online Free Games at Atmegame.com",
      description:
        "Atmegame is the online game website where you can play free games like racing, fighting, sports, girls games, puzzle, arcade, adventure and action",
      url: "https://www.atmegame.com",
      siteName: "Atmegame.com",
      images: `${S3_IMAGE_PATH}/social/og-home-page.jpg`,
    },
    twitter: {
      card: "summary_large_image",
      urls: "https://www.atmegame.com",
      title: "Play Online Free Games– Atmegame",
      description: "Play online the best and popular games free.",
      site: "AtmeGame.com",
      creator: "@Atmegame",
      images: `${S3_IMAGE_PATH}/social/og-home-page.jpg`,
    },
  };
}

export default function Page({ params }) {
  const isMobile = getDevice();

  return (
    <>
      <Ad
        cardColor="whiteAd"
        responsiveAd={isMobile}
        name="home-advertisment"
      />

      <A isMobile={isMobile} />
      <B isMobile={isMobile} />
      <Home isMobile={isMobile} />
    </>
  );
}
