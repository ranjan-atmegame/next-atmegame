import styles from "./leftblocklist.module.css";
import Image from "next/image";

export default function LeftBlockList({
  img = "",
  alt = "alt",
  heading = "",
  list = [],
  singleMsg = "",
  height = "",
  width = "",
  cls = "",
  desp = "",
}) {
  return (
    <div className={`${styles.commonImgBox} ${styles[cls]}`}>
      {img && (
        <Image
          src={img}
          alt={alt}
          height={height}
          width={width}
          priority={true}
          unoptimized={true}
        />
      )}
      {heading && <h2>{heading}</h2>}
      {singleMsg && <h3>{singleMsg}</h3>}
      {desp && <p>{desp}</p>}
      {list && (
        <div className={styles.whyList}>
          <ul>
            {Array.isArray(list) &&
              list.length > 0 &&
              list.map((item) => (
                <li className={styles.list} key={item.id}>
                  {item.label}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
