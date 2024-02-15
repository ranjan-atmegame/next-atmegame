
import styles from "@/components/common/textarea.module.css";

export default function TextArea({
    onChange = () => { },
    value = "",
    placeholder = "",
    cols = "46",
    rows = "2",
    title = "Enter other issues/problems",
    name = "problems",
    error = {},
    validation = [],
    cls = "",
    mainCls=""
}) {


    return (
        <div className={`${styles.field} ${styles[mainCls]}`}>
            <textarea
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                cols={cols}
                rows={rows}
                name={name}
                id={name}
                data-validation-type={validation}
                className={`${styles.textarea} ${styles[cls]}`}
            ></textarea>
            <label htmlFor={name} className={styles.floatingLabel}>{title}</label>
            {error && error[name] && <span className={`error-msg`}>{error[name]}</span>}
        </div>
    )
}