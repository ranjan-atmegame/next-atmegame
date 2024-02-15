import styles from "./category.module.css";
import { container, containerBg } from "@/components/layout/common.module.css";

export default function Container({ children, containerBg }) {
  return (
    <section className={styles.categories}>
      <div className={`${container} ${containerBg}`}>
        <ul>{children}</ul>
      </div>
    </section>
  );
}
