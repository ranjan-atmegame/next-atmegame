import { redirect } from "next/navigation";
import { getAuth, getDevice } from "@/app/server";
import Leaderboard from "@/components/dashboard/Leaderboard";

export default function Page() {
  const auth = getAuth();
  if (!auth.isSignedIn) {
    return redirect("/signin");
  }

  const isMobile = getDevice();
  return <Leaderboard auth={auth} isMobile={isMobile} />;
}
