"use client";
import Link from "next/link";
import { startCase } from "@/utils";
import { IMAGE_PATH_NEW } from "@/utils/Constants";
import { forwardRef } from "react";
import styles from "./category.module.css";
import Icon from "@/components/ui/images/Icon";
import useDevice from "@/hooks/useDevice";

const Item = forwardRef(
  (
    {
      category,
      toggleSubCatCB,
      CloseSubCatCB,
      name = "",
      height = 46,
      width = 46,
      priority = false,
    },
    ref
  ) => {
    const [mobile] = useDevice();
    const title = `Online ${startCase(category.name)} Games List`;
    const src =
      category && category.name
        ? `${IMAGE_PATH_NEW}cat/${category.name.toLowerCase()}.png`
        : "/img/noGameImage";

    const categorySlug = !["more-games", "/sitemap"].includes(category.slug)
      ? `/online-${category.slug}-games`
      : category.slug;

    const handleSubCategory = (e, title) => {
      if (title === "subMore") {
        e.preventDefault();
        if (mobile) {
          window.location.href = "/sitemap";
        } else if (typeof toggleSubCatCB === "function") {
          toggleSubCatCB();
        }
      } else {
        if (typeof CloseSubCatCB === "function") {
          CloseSubCatCB();
        }
      }
    };

    return (
      <li
        key={name}
        id={category.slug}
        ref={ref}
        className={
          category.title == "subMore"
            ? styles.categorymore
            : category.title == "sub-cat"
            ? styles.subcategorymore
            : ""
        }
      >
        <Link
          prefetch={false}
          href={categorySlug}
          onClick={(e) => handleSubCategory(e, category.title)}
        >
          <Icon
            alt={title}
            title={title}
            width={width}
            height={height}
            src={src}
            priority={priority}
            unoptimized={true}
          />
          <span>{category.name}</span>
        </Link>
      </li>
    );
  }
);
export default Item;
