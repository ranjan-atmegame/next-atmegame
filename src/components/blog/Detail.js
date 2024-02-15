"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { getAllBlogs } from "@/api/blog";
import BlogCard from "@/components/blog/BlogCard";
import { ddMonYy } from "@/utils/index";
import SocialShare from "@/utils/SocialShare";
import Ad from "@/components/ad";
import { S3_IMAGE_PATH } from "@/config";
import { IMAGE_PATH_NEW } from "@/utils/Constants";
export default function BlogSub({
  blog,
  styles,
  baseURL = "https://www.atmegame.com",
}) {
  const [trendingArticle, setTrendingArticle] = useState([]);

  useEffect(() => {
    getPopularArticles();
  }, [blog.url]);

  async function getPopularArticles() {
    const res = await getAllBlogs(10, 0, "count:desc");
    setTrendingArticle(res?.blogs);
  }

  return (
    <>
      <div className={styles.left}>
        <div className={styles.detailSec}>
          <Image
            src={`${S3_IMAGE_PATH}/img/blog/${blog.imageBig}`}
            width={500}
            height={350}
            title={blog?.metaTitle}
            alt={blog?.metaTitle}
            priority={true}
            unoptimized={true}
          />
          <h1>{blog?.metaTitle}</h1>
          <div>
            {blog &&
              `Published on ${new Date(blog.addDate).toLocaleString("en-us", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}`}
          </div>
          <div dangerouslySetInnerHTML={{ __html: blog?.content }}></div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.userCard}>
          <div>
            <Image
              src={`${IMAGE_PATH_NEW}users/${blog.authorImage}`}
              width={80}
              height={80}
              title={blog.metaTitle}
              alt={blog.metaTitle}
              className={styles.userImage}
              priority={true}
              unoptimized={true}
            />
            <h3>{blog?.blogBy}</h3>
            <span>{blog?.createdAt ? ddMonYy(blog.addDate) : ""}</span>
          </div>
        </div>
        <div className={styles.userCard} id="socialShareBlog">
          <SocialShare
            shareIconVisible={false}
            socialSharing={true}
            showCopyText={false}
            msg=""
            heading="Share this post"
            closeIcon={false}
            overlayCls="blogOverLay"
            modalCls="BlogModal"
            compStyles={styles}
            renderedInsideBody={false}
            fullUrl={blog?.url ? `${baseURL}/blog/${blog.url}` : ""}
          />
        </div>
        <Ad cardColor="noShadow" />

        {typeof trendingArticle !== "undefined" && (
          <div className={styles.mobPopularArticle}>
            <h3>Popular Articles</h3>
            {trendingArticle.map((item, i) => (
              <BlogCard
                key={i + item.url}
                title={item.metaTitle}
                url={item.url}
                img={item.imageBig}
                content=""
                date={item.createdAt}
                newTag={false}
                cardColor={`cardwithborder`}
                cardSize={"cardSm"}
                imgSize={"imgSizeSm"}
                blogListClass={"blogListMob"}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
