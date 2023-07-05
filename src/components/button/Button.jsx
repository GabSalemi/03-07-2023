import styles from "./button.module.scss";
import { useState, useEffect } from "react";


const Button = (props) => {1
    const { icon, label, outline, round, square} = props || null
    const [labelInfo, setLabelInfo] = useState(false)

    
    const handleButton = () => {
        if (labelInfo === false) {
            setLabelInfo(true)
        } else {
            setLabelInfo(false)
        }
    }

   

    
    return <div className={`
    ${styles.button}
    ${outline ? styles.outline : styles.fill}
    ${round ? styles.round : styles.button }
    ${labelInfo === true ? styles.label : styles.button }
    `} onClick={handleButton}>
        {labelInfo === true ? label : null}
        {round && icon}
    </div>
}

export default Button;