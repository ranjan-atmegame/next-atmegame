import styles from "./checkbox.module.css";

export default function CheckBox({
    children,
    name = "checkbox",
    id = "",
    onChange = () => { },
    cls = "",
    error = {},
    color = "",
    checked = false
}) {

    return (
        <div className={styles.field}>
            <input
                type="checkbox"
                name={name}
                id={id}
                onChange={(e) => onChange(e)}
                className={`${styles.checkbox} ${styles[cls]}`}
                checked={checked}
            />
            <label htmlFor={id} className={styles.label}>
                {children ? children : null}
            </label>
            {error && error[name] && <span className={`${styles.errMsg} error-msg`} style={{ color }}>{error[name]}</span>}
        </div>
    )
}