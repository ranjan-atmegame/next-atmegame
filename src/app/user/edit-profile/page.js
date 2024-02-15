import { redirect } from "next/navigation";
import { getAuth, getDevice } from "@/app/server";
import EditProfile from "@/components/dashboard/EditProfile";

export default function Page() {
  const auth = getAuth();
  if (!auth.isSignedIn) {
    return redirect("/signin");
  }
  const isMobile = getDevice();
  return <EditProfile auth={auth} isMobile={isMobile} />;  
}


