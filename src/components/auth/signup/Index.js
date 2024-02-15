import SignUpForm from "./Form";
import FormInfo from "./FormInfo";
import styles from "./signup.module.css";

export default function SignUp() {
  return (
    <div className={styles.mainLogin}>
      <div className={styles.container}>
        <div className={styles.formPage}>
          <div className={styles.leftBox}>
            <FormInfo />
          </div>
          <div className={styles.rightBox}>
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
}
