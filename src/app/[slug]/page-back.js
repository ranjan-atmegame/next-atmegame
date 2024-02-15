import { notFound } from "next/navigation";
import Ad from "@/components/ad";
import NewGames from "@/components/category/NewGames";
import Description from "@/components/category/Description";
import FloatButton from "@/utils/FloatButton";
import Category from "@/components/category";
import { getDevice, getRobot } from "@/app/server";
import { S3_IMAGE_URL, API_URL } from "@/config";
// import Loader from "@/components/ui/loader/loader";

const _getCategoryDetail = async (slug, isMobile) => {
  isMobile = isMobile ? 1 : 0;
  let response = await fetch(
    `${API_URL}/v1/game/category/${slug}?isMobile=${isMobile}`
  );
  response = await response.json();
  if (response && response.status == "success" && response.result) {
    return response.result;
  } else if (response && response.status !== "success" && response.error) {
    return false;
  }
};

// export async function generateMetadata({ params }) {
//   const { robots, host } = getRobot(true);
//   const canonical = `${host}/${params.slug}`;
//   const slug = params.slug.replace("online-", "").replace("-games", "");
//   const isMobile = getDevice();

//   const categoryDetail = await _getCategoryDetail(slug, isMobile);
//   if (!params.slug || !categoryDetail) {
//     notFound();
//   }

//   const { metaTitle, metaDesc, metaKeyword } = categoryDetail.category;

//   return {
//     title: metaTitle,
//     description: metaDesc,
//     keywords: [metaKeyword],

//     metadataBase: new URL("https://www.atmegame.com"),
//     alternates: {
//       canonical,
//     },
//     robots,
//     openGraph: {
//       type: "website",
//       title: metaTitle,
//       description: metaDesc,
//       url: canonical,
//       siteName: "Atmegame.com",
//       images: `${S3_IMAGE_URL}/category_images/${slug}.png`,
//     },
//     twitter: {
//       card: "summary_large_image",
//       urls: canonical,
//       title: metaTitle,
//       description: metaDesc,
//       site: "AtmeGame.com",
//       creator: "@Atmegame",
//       images: `${S3_IMAGE_URL}/category_images/${slug}.png`,
//     },
//   };
// }

async function CategoryGames({ params }) {
  const slug = params.slug.replace("online-", "").replace("-games", "");
  const isMobile = getDevice();
  const response = await _getCategoryDetail(slug, isMobile);
  if (!response) {
    notFound();
  }
  const { category, newGames } = response;

  return (
    <>
      <NewGames
        category={category}
        newGames={newGames}
        gameClass={isMobile ? "gameTwo" : "gameThree"}
        isMobile={isMobile}
        priority={true}
      />
      <Category category={category} isMobile={isMobile} />
      <Description name={category.name} description={category.description} />
      <FloatButton />
    </>
  );
}

export default async function Page({ params }) {
  if (params.slug !== "sitemap" && !params.slug.includes("online-")) {
    notFound();
  }

  const slug = params.slug.replace("online-", "").replace("-games", "");
  const isMobile = getDevice();
  const response = await _getCategoryDetail(slug, isMobile);
  if (!response) {
    notFound();
  }
  const { category, newGames } = response;

  return (
    <>
      <Ad cardColor="whiteAd" responsiveAd={isMobile ? true : false} />
      <NewGames
        category={category}
        newGames={newGames}
        gameClass={isMobile ? "gameTwo" : "gameThree"}
        isMobile={isMobile}
        priority={true}
      />
      <Category category={category} isMobile={isMobile} />
      <Description name={category.name} description={category.description} />
      <FloatButton />
    </>
  );
}
