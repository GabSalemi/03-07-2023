import styles from "./inputPassword.module.scss";
import { useState } from "react";
import { FaEye, FaEyeSlash} from "react-icons/fa";

const InputPassword = (props) => {
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
    const [isVisible, setIsVisible] = useState(false)

    const setVisibility = () => {
        setIsVisible(!isVisible)
    }

    const handleChange = (value) => {
        if (value.length < 10) {
            setError(true)
        } else {
            setError(false)
            let accessValue = value
        }
    }

    return (
        <div className={styles.inputContainer}>
            <label htmlFor={id}>
                {label && <span className={styles.label}>{label}</span>}
                    <input 
                    className={`${styles.inputDiv} ${line ? styles.line : ""} ${error === true ? styles.error : ""}`}
                    type={isVisible === true ? "text" : "password"}
                    placeholder={placeholder}
                    id={id}
                    name={name}
                    disabled={disabled}
                    onChange={(e) => handleChange(e.target.value)}/>
                {icon && <div className={styles.icon} onClick={setVisibility}>{isVisible === false ? <FaEye /> : <FaEyeSlash />}</div>}
                {error === true ? <span className={styles.errorMessage}>{errorMessage}</span> : null}
                <div></div>
            </label>
        </div>
    )
}

export default InputPassword;