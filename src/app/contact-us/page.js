import Contact from "@/components/contact";
import { getRobot } from "../server";

export async function generateMetadata() {
  const { robots, host } = getRobot(true);
  const canonical = host + "/contact-us";

  return {
    title: "Contact Us - Atmegame.com",
    description:
      "If you want to get more details and information about online games, please contact with Atmegame. Submit the form with your queries, we will get back to you soon.",
    keywords: ["contact us", "atmegame.com"],
    metadataBase: new URL("https://www.atmegame.com"),
    alternates: {
      canonical,
    },
    robots,
  };
}

export default function Page() {
  return (
    <div className="">
      <Contact />
    </div>
  );
}
