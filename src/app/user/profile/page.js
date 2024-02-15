import { redirect } from "next/navigation";
import { getAuth, getDevice } from "@/app/server";
import Profile from "@/components/dashboard/Profile";

export default function Page() {
  const auth = getAuth();
  if (!auth.isSignedIn) {
    return redirect("/signin");
  }
  const isMobile = getDevice();
  return <Profile auth={auth} isMobile={isMobile} />;
}
