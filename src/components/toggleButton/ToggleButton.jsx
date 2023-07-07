import { useState } from "react";
import styles from "./toggleButton.module.scss";
import { FaCheck } from "react-icons/fa";


const ToggleButton = ({ type, on, label, checkboxSwitch }) => {
  const [isOn, setIsOn] = useState(on);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (<>
    {checkboxSwitch === true ? <div className={styles.toggleContainer}>
        <label className={styles.label}>{label}</label>
        <label className={styles.toggleButton}>
        <input
            className={styles.input}
            type={type}
            defaultChecked={isOn}
            onClick={() => toggle()}
        />
        <span className={styles.on} />
        </label>
    </div> : <div className={styles.checkboxContainer}>
              <label className={styles.label}>{label}</label>
              <div className={styles.checkDiv}>
                <input
                    className={styles.checkboxInput}
                    type={type}
                    defaultChecked={isOn}
                    onClick={() => toggle()}
                />
                {isOn && <div className={styles.checked} onClick={() => toggle()}>
                  {type === "checkbox" ? <FaCheck className={styles.checkboxIcon}/> : <div className={styles.radioIcon}></div> }
                </div>}
              </div>
           </div>}
    
    </>)
};

export default ToggleButton;