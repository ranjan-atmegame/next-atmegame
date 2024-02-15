import { redirect } from "next/navigation";
import { getAuth, getDevice } from "@/app/server";
import Dislike from "@/components/dashboard/DislikedGames";

export default function Page() {
  const auth = getAuth();
  if (!auth.isSignedIn) {
    return redirect("/signin");
  }

  const isMobile = getDevice();
  return <Dislike auth={auth} isMobile={isMobile} />;
}
