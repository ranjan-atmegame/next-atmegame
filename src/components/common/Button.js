import styles from "./button.module.css";

export default function Button({
    type = "button",
    label = "",
    onClick = () => { },
    loading = false,
    cls ="a",
    disabled= false
}) {

    if (loading) {
        return (
            <button
                type={type}
                className={`${styles.button} ${styles.loading}`}
            >
                <span className={styles.loader}>&nbsp;</span>
            </button>
        )
    }
    return (
        <button
            type={type}
            onClick={(e) => onClick(e)}
            className={`${styles.button} ${styles[cls]}`}
            disabled={disabled}
        >
            {label}
        </button>
    )
} 