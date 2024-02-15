import styles from "@/components/blog/blogcard.module.css";
import Image from "next/image";
import { S3_IMAGE_PATH } from "@/utils/Constants";
import { limitWords, ddMonYy } from "@/utils/index";
import Link from "next/link";
import Card from "../ui/card/Card";

export default function BlogCard({
  title = "",
  url = "",
  img = "",
  content = "",
  date = "",
  cardSize = "",
  newTag = true,
  imgSize = "",
  blogListClass = "",
  cardColor = "noBorderBlog",
  priority = false,
}) {
  return (
    <Card cardColor={cardColor}>
      <div className={styles.blogPost}>
        <ul className={styles[blogListClass]}>
          <li>
            {newTag && <div className={styles.new}>New</div>}
            <span className={`${styles.postImage} ${styles[imgSize]}`}>
              <Link href={`/blog/${url}`} title={`/blog/${url}`}>
                <Image
                  src={`${S3_IMAGE_PATH}/img/blog/${img}`}
                  width={260}
                  height={150}
                  alt={url}
                  title={title}
                  priority={priority}
                  unoptimized={true}
                />
              </Link>
            </span>
            <div className={`${styles.postContent}  ${styles[cardSize]}`}>
              <span>{`Published on ${ddMonYy(date)}`}</span>
              <h2>
                <Link href={`/blog/${url}`} title={`/blog/${url}`}>
                  {title}
                </Link>
              </h2>
              {content && (
                <div
                  dangerouslySetInnerHTML={{ __html: limitWords(content, 50) }}
                />
              )}
            </div>
          </li>
        </ul>
      </div>
    </Card>
  );
}
