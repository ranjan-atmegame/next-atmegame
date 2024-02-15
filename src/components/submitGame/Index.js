import Form from "./Form";
import FormInfo from "./FormInfo";
import styles from "./submitgame.module.css";

export default function SubmitGameForm() {
  return (
    <div className={styles.mainSubmit}>
      <div className={styles.container}>
        <div className={styles.submitgame}>
          <div className={styles.leftBlock}>
            <FormInfo />
            <br /> <br /> <br /> <br /> <br /> <br />
          </div>
          <div className={styles.rightBlock}>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
