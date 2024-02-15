import ForgotPassForm from "./Form";
import FormInfo from "./FormInfo";
import styles from "./forgotpass.module.css";

export default function ForgotPassComp() {
  return (
    <div className={styles.mainLogin}>
      <div className={styles.container}>
        <div className={styles.formPage}>
          <div className={styles.leftBox}>
            <FormInfo />
          </div>
          <div className={styles.rightBox}>
            <ForgotPassForm />
          </div>
        </div>
      </div>
    </div>
  );
}
