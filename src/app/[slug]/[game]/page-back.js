import Ad from "@/components/ad";
import Breadcrumb from "@/components/game/Breadcrumb";
import Game from "@/components/game";
import { getDevice, getRobot } from "@/app/server";
import { S3_SLIDE_IMAGE, API_URL } from "@/config";
import Loader from "@/components/ui/loader/loader";
import { redirect } from "next/navigation";

let gameDetail = null;
let loader = true;
const _getGameDetail = async (slug) => {
  let response = await fetch(`${API_URL}/v1/game/slug/${slug}`);
  response = await response.json();
  loader = false;
  if (response.status !== "success") {
    return {};
  }

  gameDetail = response.result;
  return gameDetail;
};

export async function generateMetadata({ params }) {
  const isMobile = getDevice();
  const device = isMobile ? "mobile" : "desktop";
  const { robots, host } = getRobot(true);
  if (!params.game || !gameDetail?.game) {
    return {};
  }

  const canonical = `${host}/games/${params.game}`;

  try {
    let { metaTitle, metaDesc, metaKeyword, image } = gameDetail.game;

    return {
      title: metaTitle,
      description: metaDesc,
      keywords: [metaKeyword],

      metadataBase: new URL("https://www.atmegame.com"),
      alternates: {
        canonical,
      },
      robots,
      openGraph: {
        type: "website",
        title: metaTitle,
        description: metaDesc,
        url: canonical,
        siteName: "Atmegame.com",
        images: `${S3_SLIDE_IMAGE}/${device}/${image}_slide.jpg`,
      },
      twitter: {
        card: "summary_large_image",
        urls: canonical,
        title: metaTitle,
        description: metaDesc,
        site: "AtmeGame.com",
        creator: "@Atmegame",
        images: `${S3_SLIDE_IMAGE}/${device}/${image}_slide.jpg`,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default async function Page({ params }) {
  const response = await _getGameDetail(params.game);
  const isMobile = getDevice();

  if (!response?.game?._id) {
    return redirect("/not-found");
  }
  if (loader) {
    return <Loader />;
  } else {
    return (
      <>
        <Ad cardColor="whiteAd" responsiveAd={isMobile ? true : false} />
        <Breadcrumb
          category={response.category}
          subCategory={response.subCategory}
          game={response.game}
        />
        <Game
          gameDetail={response}
          isMobile={isMobile}
          cat={response.category}
          subCat={response.subCategory}
        />
      </>
    );
  }
}
