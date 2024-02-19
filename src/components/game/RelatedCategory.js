"use client";
import { useState, useEffect } from "react";
import Icon from "@/components/ui/images/Icon";
import Link from "next/link";
import { startCase } from "@/utils";
import { fetchGameRelatedCategory } from "@/api/category";
import { COLORS, IMAGE_PATH_NEW } from "@/utils/Constants";

import styles from "./relatedCategory.module.css";

const RelatedCategory = ({
  categoryId,
  isMobile,
  apiCalls = true,
  categories = [],
}) => {
  const [category, setCategory] = useState(categories);

  useEffect(() => {
    {
      apiCalls &&
        categoryId &&
        fetchGameRelatedCategory(categoryId).then((response) => {
          if (response.result) {
            setCategory(response.result);
          }
        });
    }
  }, [categoryId]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setCategory(categories);
  }, [categories]);

  return (
    <div className={styles.relatedCategories}>
      <ul>
        {category.map((item, index) => {
          let categoryName = item.name;
          let name =
            categoryName.length < 10
              ? categoryName
              : categoryName.substr(0, 10) + "...";

          let nameUCFirst = startCase(name);
          const src =
            item && item.name
              ? `${IMAGE_PATH_NEW}cat/${item.name.toLowerCase()}.png`
              : "/img/noGameImage";

          return (
            <li key={item.name}>
              <Link
                prefetch={false}
                href={`/online-${item.slug}-games`}
                className={styles.iconSoccer}
                style={{ backgroundColor: COLORS[index] }}
              >
                <Icon
                  src={src}
                  title={`${nameUCFirst} Games`}
                  height="25"
                  width="25"
                  unoptimized={true}
                  lazy="lazy"
                />
                <span>{nameUCFirst}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RelatedCategory;
