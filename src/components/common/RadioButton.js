import styles from "./radiobutton.module.css";

export default function RadioButton({
  children,
  name = "gender",
  value = "",
  onChange = () => {},
  radioCls = "radio",
  error = {},
  validation = [],
  id = "",
  mainCls = "",
  labelCls = "label",
  checked = "",
}) {
  return (
    <div className={`${styles.field} ${styles[mainCls]}`}>
      <input
        id={id}
        type="radio"
        value={value}
        onChange={(e) => onChange(e)}
        name={name}
        className={`${styles[radioCls]}`}
        data-validation-type={validation}
        checked={checked}
      />
      <label htmlFor={id} className={styles[labelCls]}>
        {children ? children : null}
      </label>
      {error && <span className={`${styles.errMsg} error-msg`}>{error}</span>}
    </div>
  );
}
