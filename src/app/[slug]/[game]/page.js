import dynamic from "next/dynamic";
import Ad from "@/components/ad";
import { getDevice } from "@/app/server";
import Loader from "@/components/ui/loader/loader";
const GameDetail = dynamic(() => import("./GameDetail"), {
  loading: () => <Loader />,
});

export default async function Page({ params }) {
  const isMobile = getDevice();

  return (
    <>
      <Ad cardColor="whiteAd" responsiveAd={isMobile} />
      <GameDetail params={params} isMobile={isMobile} />
    </>
  );
}
