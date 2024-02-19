import Icon from "@/components/ui/images/Icon";
import { startCase } from "@/utils";
import styles from "./card.module.css";
import Link from "next/link";

export default function ProfileHeader({
  icon = "https://test11.atmequiz.com/img/boys.png",
  slug,
  title,
  headingColor,
  isMoreBtn = true,
  custom = false,
  showFilter = false,
  children,
}) {
  if (!custom) {
    return (
      <div className={styles.cardHeader}>
        <div className={styles.gameCategory}>
          <Icon
            src={`${icon}`}
            // src={`/img/category/${icon}.png`}
            alt={`${title}`}
            title={`${title}`}
            width="40"
            height="40"
            iconClass={styles.catListIcon}
          />
          <h2 className={styles[headingColor]}>
            <span className={styles.b_border}>{`${startCase(title)}`}</span>

            {isMoreBtn && (
              <Link prefetch={false} href={slug}>
                <span className={styles.viewMore}>
                  More
                  <Icon
                    src={`/img/arrow-right.svg`}
                    alt={`View More ${title}`}
                    title={`View More ${title}`}
                    width="18"
                    height="18"
                    iconClass={styles.moreIcon}
                  />
                </span>
              </Link>
            )}

            {showFilter && <span className={styles.viewMore}>{children}</span>}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cardHeader}>
      <div className={styles.gameCategory}>
        <h2>{title}</h2>
      </div>

      {isMoreBtn ? <MoreButton href={`${slug}`} /> : ""}
    </div>
  );
}
