import Link from "next/link";
import GameImage from "@/components/ui/images/Icon";
import styles from "./item.module.css";
import { IMAGE_PATH_NEW } from "@/utils/Constants";
import { startCase } from "@/utils";

const CategoryItem = ({ category, gameClass }) => {
  const title = `Online ${startCase(category.name)} Games List`;
  // const [width, height, src] = CATEGORY_SIZE[category.slug]
  //   ? [
  //       CATEGORY_SIZE[category.slug].width,
  //       CATEGORY_SIZE[category.slug].height,
  //       CATEGORY_SIZE[category.slug].src,
  //     ]
  //   : [50, 50, "/img/sports.png"];

  const src =
    category && category.name
      ? `${IMAGE_PATH_NEW}cat/${category.name.toLowerCase()}.png`
      : "/img/noGameImage";

  return (
    <div className={`${styles.gameCard} ${styles[gameClass]} itemWidth`}>
      <Link
        prefetch={false}
        href={`/online-${category.slug}-games`}
        className={styles.gameCardImg}
      >
        <div className={styles.imgwrapper}>
          <GameImage
            src={src}
            className={styles.gameCardImg}
            width="46"
            height="46"
            title={title}
            alt={title}
            priority={true}
            unoptimized={true}
          />
        </div>
      </Link>
      {/* <p>{category.name}</p> */}
    </div>
  );
};

export default CategoryItem;
