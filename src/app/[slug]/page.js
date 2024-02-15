import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import Ad from "@/components/ad";
import Loader from "@/components/ui/loader/loader";
import { getDevice } from "@/app/server";
const CategoryGames = dynamic(() => import("./CategoryGames"), {
  loading: () => <Loader />,
});

export default function Page({ params }) {
  if (params.slug !== "sitemap" && !params.slug.includes("online-")) {
    notFound();
  }

  const isMobile = getDevice();

  return (
    <>
      <Ad cardColor="whiteAd" responsiveAd={isMobile} />
      <CategoryGames params={params} isMobile={isMobile} />
    </>
  );
}
