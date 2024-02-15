import Image from "next/image";
import { getRobot, getDevice } from "../../server";
import { getBlogByUrl } from "@/api/blog";
import { S3_IMAGE_PATH } from "@/config";
import CardContainer from "@/components/ui/card/CardContainer";
import Detail from "@/components/blog/Detail";
import styles from "@/components/blog/blog.module.css";
import { redirect } from "next/dist/server/api-utils";
import Ad from "@/components/ad";

let blog = null;
const getBlogList = async (slug) => {
  blog = await getBlogByUrl(slug);
  return blog;
};

export async function generateMetadata({ params: { slug } }) {
  const { robots, host } = getRobot(true);
  const canonical = `${host}/blog/${slug}`;

  if (!blog) {
    return {};
  }

  return {
    title: blog.metaTitle,
    description: blog.metaDesc,
    keywords: [blog.metaKeywords],
    metadataBase: new URL("https://www.atmegame.com"),
    alternates: {
      canonical,
    },
    robots,
    openGraph: {
      type: "website",
      title: blog.metaTitle,
      description: blog.metaDesc,
      url: canonical,
      siteName: "Atmegame.com",
      images: `${S3_IMAGE_PATH}/img/blog/${blog.imageBig}`,
    },
    twitter: {
      card: "summary",
      title: blog.metaTitle,
      description: blog.metaDesc,
      url: canonical,
      site: "AtmeGame.com",
      creator: "@Atmegame",
      images: `${S3_IMAGE_PATH}/img/blog/${blog.imageBig}`,
    },
  };
}

export default async function Page({ params: { slug } }) {
  const blog = await getBlogList(slug);
  const isMobile = getDevice();


  if (!blog) {
    return redirect("/blog");
  }

  return (
    <>
      <Ad cardColor="whiteAd" responsiveAd={isMobile ? true : false} />

      <CardContainer>
        <div className={`${styles.blog} ${styles.blogDetails}`}>
          <Detail blog={blog} styles={styles} />
        </div>
      </CardContainer>
    </>
  );
}
