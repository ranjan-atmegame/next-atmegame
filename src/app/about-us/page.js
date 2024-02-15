import About from "@/components/about";
import { getRobot } from "../server";
import { S3_IMAGE_PATH } from "@/utils/Constants";

export async function generateMetadata() {
  const { robots, host } = getRobot(true);
  const canonical = host + "/about-us";

  return {
    title:
      "Join Our program and become a atmegame Partner, About Us - Atmegame.com",
    description:
      "Atmegame.com is a completely new platform for the online games lovers. Join Our program and become a atmegame Partner",
    keywords: ["about us", "atmegame.com"],
    metadataBase: new URL("https://www.atmegame.com/about-us"),
    alternates: {
      canonical,
    },
    robots,
    openGraph: {
      type: "website",
      title:
        "Join Our program and become a atmegame Partner, About Us - Atmegame.com",
      description:
        "Atmegame is the online game website where you can play free games like racing, fighting, sports, girls games, puzzle, arcade, adventure and action",
      url: "https://www.atmegame.com/about-us",
      siteName: "Atmegame.com",
      images: `${S3_IMAGE_PATH}/img/submit-a-game-image.svg`,
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Join Our program and become a atmegame Partner, About Us - Atmegame.com",
      description:
        "Atmegame is the online game website where you can play free games like racing, fighting, sports, girls games, puzzle, arcade, adventure and action",
      url: "https://www.atmegame.com/about-us",
      site: "AtmeGame.com",
      creator: "@Atmegame",
      images: `${S3_IMAGE_PATH}/img/submit-a-game-image.svg`,
    },
  };
}

export default function Page() {
  return <About />;
}
