import Link from "next/link";
import styles from "./breadcrumb.module.css";

export default function Breadcrumb({ category, subCategory, game }) {
  const buildBreadcrumb = () => {
    let breadcrumb = [{ name: "Home", slug: "" }];

    if (category?.name) {
      breadcrumb.push({
        name: `${category.name}`,
        slug: `online-${category.slug}-games`,
      });
    }
    if (subCategory?.name) {
      breadcrumb.push({
        name: `${subCategory.name}`,
        slug: `online-${subCategory.slug}-games`,
      });
    }

    return breadcrumb.map((item, index) => {
      return (
        <li
          key={item.name}
          style={{ textTransform: "capitalize" }}
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link href={`/${item.slug}`} title={item.name} itemProp="item">
            <span itemProp="name">
              {item.name} <i className="arrows right"></i>
            </span>
          </Link>
          <meta itemProp="position" content={index + 1} />
        </li>
      );
    });
  };

  return (
    <section>
      <div className={styles.container}>
        <ul
          className={styles.breadcrumb}
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {buildBreadcrumb()}
          <li itemScope itemType="https://schema.org/ListItem">
            {game?.name}
          </li>
        </ul>
      </div>
    </section>
  );
}
