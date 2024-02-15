import { redirect } from "next/navigation";
import { getAuth, getDevice } from "@/app/server";
import Liked from "@/components/dashboard/LikedGames";

export default function Page() {
  const auth = getAuth();
  if (!auth.isSignedIn) {
    return redirect("/signin");
  }

  const isMobile = getDevice();
  return <Liked auth={auth} isMobile={isMobile} />;
}
