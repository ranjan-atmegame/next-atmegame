"use client";
import { useState, useEffect } from "react";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import useBlog from "@/hooks/useBlog";
import BlogCard from "@/components/blog/BlogCard";
import styles from "@/components/blog/blog.module.css";
import CardContainer from "../ui/card/CardContainer";
import Card from "../ui/card/Card";
import NewsSubscribe from "./NewsSubscribe";
import { relatedCat, getAllBlogs } from "@/api/blog";
import RelatedCategory from "@/components/game/RelatedCategory";
import Icon from "@/components/ui/images/Icon";
import Shimmer from "@/components/common/shimmer/Shimmer";
import Ad from "@/components/ad";
import FloatButton from "@/utils/FloatButton";

function BlogPage({ resultBlog = {}, pageTitle }) {
  const [initLimit, setInitLimit] = useState(0);
  const [blogData, setBlogData] = useState(resultBlog.blogs);
  const [noMoreCatGames, setNoMoreCatGames] = useState(false);
  const [relatedCategories, setRelatedCategories] = useState();
  const [trendingArticle, setTrendingArticle] = useState();

  const { loadMoreRef, limit } = useInfiniteScroll(initLimit, 10);
  const [blogResults, loading] = useBlog(
    10,
    limit,
    updateStateInParent,
    noMoreCatGames
  );

  useEffect(() => {
    if (
      blogResults &&
      blogResults.blogs &&
      Array.isArray(blogResults.blogs) &&
      blogResults.blogs.length > 0
    ) {
      setBlogData([...blogData, ...blogResults.blogs]);
    }
  }, [blogResults]);

  useEffect(() => {
    getRelatedCategory();
    getPopularArticles();
  }, []);

  function updateStateInParent(flag) {
    setNoMoreCatGames(flag);
  }

  async function getRelatedCategory() {
    const res = await relatedCat();
    setRelatedCategories(res);
  }

  async function getPopularArticles() {
    const res = await getAllBlogs(10, 0, "count:desc");
    setTrendingArticle(res?.blogs);
  }

  const createBlog = () => {
    return (
      blogData &&
      Array.isArray(blogData) &&
      blogData.length > 0 &&
      blogData.map((item, i) => (
        <BlogCard
          key={i + item.url}
          title={item.metaTitle}
          url={item.url}
          img={item.imageBig}
          content={item.content}
          date={item.addDate}
          priority={i < 2 ? true : false}
        />
      ))
    );
  };

  return (
    <>
      <CardContainer>
        <div className={styles.blog}>
          <div className={styles.left}>
            <div className={styles.container}>
              {createBlog()}
              {loading && <Shimmer type="blog" />}
              {noMoreCatGames && (
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <Icon
                    width={175}
                    height={110}
                    src="/img/allFolks.png"
                    alt="all folks"
                  />
                </div>
              )}
              <div className={styles.loader} ref={loadMoreRef}></div>
            </div>
          </div>
          <div className={styles.right}>
            <Ad cardColor="noShadow" />
            <Card cardWidth="w100" cardColor="noShadow">
              <NewsSubscribe />
            </Card>
            {typeof relatedCategories !== "undefined" && (
              <Card cardWidth="w100" cardColor="noBorderBlog">
                <div className={styles.innerSpace}>
                  <h3>Related category</h3>
                  <RelatedCategory
                    apiCalls={false}
                    categories={relatedCategories}
                    categoryId=""
                  />
                </div>
              </Card>
            )}
            {typeof trendingArticle !== "undefined" && (
              <Card cardWidth="w100" cardColor="noBorderBlog">
                <div className={styles.rightWrapper}>
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
                      blogListClass={"blogListMob"}
                      imgSize={"imgSizeSm"}
                    />
                  ))}
                </div>
              </Card>
            )}
          </div>
        </div>
        <FloatButton />
      </CardContainer>
    </>
  );
}
export default BlogPage;
