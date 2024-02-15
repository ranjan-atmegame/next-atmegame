import { redirect } from "next/navigation";
import { getAuth, getDevice } from "@/app/server";
import GamesPlayed from "@/components/dashboard/GamesPlayed";

export default function Page() {
  const auth = getAuth();
  if (!auth.isSignedIn) {
    return redirect("/signin");
  }

  const isMobile = getDevice();
  return <GamesPlayed auth={auth} isMobile={isMobile} />;
}
