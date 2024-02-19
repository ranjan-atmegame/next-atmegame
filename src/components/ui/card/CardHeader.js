"use client";
import Icon from "@/components/ui/images/Icon";
import { startCase } from "@/utils";
import { IMAGE_PATH_NEW } from "@/utils/Constants";
import styles from "./card.module.css";
import Link from "next/link";
import useDevice from "@/hooks/useDevice";
import HtmlTag from "../HtmlTag";

export default function CardHeader({
  icon = "new_game",
  slug,
  title,
  headingColor = "",
  isMoreBtn = true,
  custom = false,
  showFilter = false,
  children,
  headerClass = "",
  h1 = false,
  iconName = "new_game",
  fallBackImg = "https://www.atmegame.com/img/logo-icon.png",
  rightArrow = "/img/arrow-right.svg",
}) {
  const [mobile] = useDevice();

  const src = iconName
    ? `${IMAGE_PATH_NEW}cat/${iconName}.png`
    : "/img/noGameImage.png";

  if (!custom) {
    return (
      <div className={`${styles.cardHeader} ${styles[headerClass]}`}>
        <div className={styles.gameCategory} id={slug}>
          <Icon
            src={src}
            alt={`Play Online ${title}`}
            title={`Play Online ${title}`}
            width="40"
            height="40"
            iconClass={styles.catListIcon}
            fallBackImg={fallBackImg}
          />
          <HtmlTag tag={h1 ? "h1" : "h2"} cls={headingColor} styles={styles}>
            {isMoreBtn ? (
              <Link
                prefetch={false}
                href={slug}
                style={{ display: `${mobile ? "block" : "inline-block"}` }}
                title={title}
              >
                <span className={styles.b_border}>{`${startCase(title)}`}</span>
              </Link>
            ) : (
              <span className={styles.b_border}>{`${startCase(title)}`}</span>
            )}
            {showFilter && <span className={styles.viewMore}>{children}</span>}
          </HtmlTag>
          {isMoreBtn && (
            <Link
              prefetch={false}
              href={slug}
              title={`Online ${title}`}
              className={styles.headingMore}
            >
              <span className={styles.viewMore}>
                More
                <Icon
                  src={rightArrow}
                  alt={`View More ${title}`}
                  title={`View More ${title}`}
                  width="18"
                  height="18"
                  iconClass={styles.moreIcon}
                  fallBackImg={fallBackImg}
                />
              </span>
            </Link>
          )}
        </div>
      </div>
    );
  }
  return (
    <div className={styles.cardHeader}>
      <div className={styles.gameCategory}>
        <h2>{title}</h2>
        {isMoreBtn && (
          <Link prefetch={false} href={slug}>
            More &nbsp; &gt;
          </Link>
        )}
      </div>
    </div>
  );
}
