import { redirect } from "next/navigation";
import { getAuth, getDevice } from "@/app/server";
import Recommeded from "@/components/dashboard/RecommendedGames";

export default function Page() {
  const auth = getAuth();
  if (!auth.isSignedIn) {
    return redirect("/signin");
  }

  const isMobile = getDevice();
  return <Recommeded auth={auth} isMobile={isMobile} />;
}
