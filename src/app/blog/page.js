import BlogPage from "@/components/blog/Index";
import CardContainer from "@/components/ui/card/CardContainer";
import Ad from "@/components/ad";
import { getAllBlogs } from "@/api/blog";
import { getRobot, getDevice } from "../server";
import styles from "@/components/blog/blog.module.css";

export async function generateMetadata() {
  const { robots, host } = getRobot(true);
  const canonical = host + "/blog";

  return {
    title: "Online Games Blog : Atmegame",
    description: "Atmegame online games blogs",
    keywords: ["Online games, atmegame blog", "online free games blog"],
    metadataBase: new URL("https://www.atmegame.com"),
    alternates: {
      canonical,
    },
    robots,
  };
}

export default async function Blog() {
  const result = await getAllBlogs(10);
  const isMobile = getDevice();

  return (
    <>
      <CardContainer>
        <h1 className={styles.bogh1}>Online Games Blog</h1>
      </CardContainer>

      <Ad cardColor="whiteAd" responsiveAd={isMobile ? true : false} />

      {result.blogs?.length && <BlogPage resultBlog={result} />}
    </>
  );
}
