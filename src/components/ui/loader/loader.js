import styles from "./loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderInner}>
        <div className={styles.customLoader}>
          <div className={styles.spinner}></div>
        </div>
      </div>
    </div>
  );
}
