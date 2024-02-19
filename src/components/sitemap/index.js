"use client";
import Icon from "../ui/images/Icon";
import { IMAGE_PATH_NEW } from "@/utils/Constants";
import useSitemap from "@/hooks/useSitemap";
import CardContainer from "../ui/card/CardContainer";
import CardHeader from "../ui/card/CardHeader";
import styles from "./sitemap.module.css";
import Link from "next/link";
import { startCase } from "@/utils/index";
import Shimmer_sitemap from "../common/shimmer/shimmer_sitemap";

export default function SitemapPage() {
  const [result, isLoading] = useSitemap();
  const catgames = result;

  if (isLoading) {
    return (
      <div>
        <Shimmer_sitemap gameTitle="fff" />
      </div>
    );
  }

  function getCategory(catgames) {
    return catgames.map((category) => {
      let subCategoryStr = category.subCategory.map((subcat, i) => {
        const categoryName = startCase(subcat.name);
        const subcatSrc =
          subcat && subcat.name
            ? `${IMAGE_PATH_NEW}cat/${subcat.name.toLowerCase()}.png`
            : "/img/noGameImage";
        return (
          <li
            className={`${styles.subcategory} ${styles.w100}`}
            key={subcat.name + i}
            id={subcat.name + i}
          >
            <Link prefetch={false} href={`/online-${subcat.name}-games`}>
              <Icon
                src={subcatSrc}
                width="44"
                height="44"
                alt={categoryName}
                title={categoryName}
                priority={true}
              />
              <span>{categoryName}</span>
            </Link>
          </li>
        );
      });

      const categoryName = startCase(category.name);
      const catSrc =
        category && category.name
          ? `${IMAGE_PATH_NEW}cat/${category.name.toLowerCase()}.png`
          : "/img/noGameImage";
      return (
        <>
          <li
            className={styles.allSubCat}
            key={category.name}
            id={category.name}
          >
            {category.name === "Feature" ? (
              <span className={styles.noLink}>
                <Icon
                  src={catSrc}
                  width="44"
                  height="44"
                  alt={categoryName}
                  title={categoryName}
                  priority={true}
                />
                <span>&nbsp;&nbsp;{categoryName}</span>
              </span>
            ) : (
              <Link
                prefetch={false}
                href={`/online-${category.name.toLowerCase()}-games`}
              >
                <Icon
                  src={catSrc}
                  width="44"
                  height="44"
                  alt={categoryName}
                  title={categoryName}
                  priority={true}
                />
                <span>&nbsp;&nbsp;{categoryName}</span>
              </Link>
            )}
          </li>

          <ul className={styles.subCatBg}>{subCategoryStr}</ul>
        </>
      );
    });
  }

  return (
    <>
      <CardContainer
        isContainerStyle={true}
        header={<CardHeader slug="" isMoreBtn={false} title="Sitemap Page" />}
      >
        <div className={styles.siteMap}>
          <ul className={styles.catHeading}>
            {catgames && getCategory(catgames)}
          </ul>
        </div>
      </CardContainer>
    </>
  );
}
