"use client";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from "./mobile.module.css";

export default function MobileNo({
    type = "tel",
    placeholder = "Mobile",
    value = "",
    onChange = () => { },
    onFocus = () => { },
    onBlur = () => { },
    onKeyUp = () => { },
    title = "",
    name = "",
    cls = "",
    error = {},
    validation = [],
    maxL = "",
    color = "",
    floatLabel = false,
    readOnly = "",
}) {

    return (
        <div className={styles.field}>
            <div
                data-validation-type={validation}
            >
                <PhoneInput
                    country={`in`}
                    value={value}
                    onChange={onChange}
                    inputProps={{
                        required: true,
                        autoFocus: true
                    }}
                    enableAreaCodes={true}
                    enableAreaCodeStretch
                    inputClass={styles.input}
                    containerClass={styles.field}
                    placeholder={placeholder}
                />
            </div>


            {error && error[name] && (
                <span className={`${styles.errMsg} error-msg`} style={{ color }}>
                    {error[name]}
                </span>
            )}

            {/* <input
                id={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e)}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyUp={(e) => onKeyUp(e)}
                name={name}
                className={`${styles.input} ${styles[cls]}`}
                data-validation-type={validation}
                maxLength={maxL}
                readOnly={readOnly}
            />
            <label
                htmlFor={name}
                className={`${styles.floatingLabel} ${floatLabel ? styles.autofill : ""
                    }`}
            >
                {title}
            </label>
             */}
        </div>
    );
}

