import { redirect } from "next/navigation";
import { getAuth, getDevice } from "@/app/server";
import Dashboard from "@/components/dashboard";

export default function Page() {
  const auth = getAuth();
  if (!auth.isSignedIn) {
    return redirect("/signin");
  }

  const isMobile = getDevice();
  return <Dashboard auth={auth} isMobile={isMobile} />;
}
