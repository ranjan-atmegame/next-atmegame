import { redirect } from "next/navigation";
import { getAuth, getDevice } from "@/app/server";
import CoinsHistory from "@/components/dashboard/CoinsHistory";

export default function Page() {
  const auth = getAuth();
  if (!auth.isSignedIn) {
    return redirect("/signin");
  }

  const isMobile = getDevice();
  return <CoinsHistory auth={auth} isMobile={isMobile} />;
}
