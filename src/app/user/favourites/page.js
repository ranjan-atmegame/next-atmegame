import { redirect } from "next/navigation";
import { getAuth, getDevice } from "@/app/server";
import Favourite from "@/components/dashboard/FavouriteGames";

export default function Page() {
  const auth = getAuth();
  if (!auth.isSignedIn) {
    return redirect("/signin");
  }

  const isMobile = getDevice();
  return <Favourite auth={auth} isMobile={isMobile} />;
}
