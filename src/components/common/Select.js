
import styles from "./select.module.css";

export default function Select({
    value = "",
    title = "",
    reasons = [],
    onChange = () => { },
    cls=""
}) {

    return (
        <div className={`${styles.field} ${styles.cls}`}>
            <select className={styles.select} onChange={(e) => onChange(e)} value={value}>
                {reasons && Array.isArray(reasons) && reasons.length > 0 && reasons.map((item) =>
                    <option name={item.name} key={item.id} >{item.name}</option>
                )}
            </select>
            <label htmlFor="name" className={styles.floatingLabel}>{title}</label>
        </div>
    )
}