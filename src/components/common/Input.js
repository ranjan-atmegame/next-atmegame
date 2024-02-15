"use client";
import styles from "./input.module.css";

export default function Input({
  type = "text",
  placeholder = "",
  value = "",
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  onKeyUp = () => {},
  title = "",
  name = "",
  cls = "",
  error = {},
  validation = [],
  maxL = "",
  color = "",
  floatLabel = false,
  readOnly="",
}) {
  return (
    <div className={styles.field}>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyUp={onKeyUp}
        name={name}
        className={`${styles.input} ${styles[cls]}`}
        data-validation-type={validation}
        maxLength={maxL}
        readOnly={readOnly}
      />
      <label
        htmlFor={name}
        className={`${styles.floatingLabel} ${
          floatLabel ? styles.autofill : ""
        }`}
      >
        {title}
      </label>
      {error && error[name] && (
        <span className={`${styles.errMsg} error-msg`} style={{ color }}>
          {error[name]}
        </span>
      )}
    </div>
  );
}
