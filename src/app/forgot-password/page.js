import ForgotPassComp from "@/components/auth/forgotPassword/Index";
import { getRobot } from "../server";

export async function generateMetadata() {
  const { robots, host } = getRobot(true);
  const canonical = host + "/forgot-password";

  return {
    title: "Forget Password",
    description:
      "Reset your Atmegame password easily. Regain access to your gaming account with our simple 'Forgot Password' process.",
    keywords: ["Forgot password", "atmegame.com"],
    metadataBase: new URL("https://www.atmegame.com"),
    alternates: {
      canonical,
    },
    robots,
  };
}

export default function ForgotPassword() {
  return (
    <div>
      <ForgotPassComp />
    </div>
  );
}
