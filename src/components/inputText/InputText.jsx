import { useState } from "react";
import styles from "./inputText.module.scss";

const InputText = (props) => {
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
        if (value.length > 12) {
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
                    type="text" 
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

export default InputText;