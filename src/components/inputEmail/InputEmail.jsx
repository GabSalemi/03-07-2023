import { useState } from "react";
import styles from "./inputEmail.module.scss";

const InputEmail = (props) => {
    const {
        id,
        label,
        name,
        line,
        placeholder,
        disabled,
        icon,
        errorMessage
    } = props || null

    const [error, setError] = useState(false)

    const handleChange = (value) => {
        if (!(value.includes("@"))) {
            setError(true)
        } else {
            setError(false)
            let accessValue = value
        }
    }

    return (
        <div className={`${styles.inputContainer}`}>
            <label htmlFor={id}>
                {label && <span className={styles.label}>{label}</span>}
                    <input 
                    className={`${styles.inputDiv} ${line ? styles.line : ""} ${error === true ? styles.error : ""}`}
                    type="email" 
                    placeholder={placeholder}
                    id={id}
                    name={name}
                    disabled={disabled}
                    onChange={(e) => handleChange(e.target.value)}/>
                    {error === true ? <span className={styles.errorMessage}>{errorMessage}</span> : null}

            </label>
        </div>
    )
}

export default InputEmail;