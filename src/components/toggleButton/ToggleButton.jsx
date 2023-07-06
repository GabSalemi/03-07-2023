import { useState } from "react";

import styles from "./toggleButton.module.scss";

const ToggleButton = ({ on, label }) => {
  const [isOn, setIsOn] = useState(on);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={styles.toggleContainer}>
        <label className={styles.label}>{label}</label>
        <label className={styles.toggleButton}>
        <input
            className={styles.input}
            type="checkbox"
            defaultChecked={isOn}
            onClick={() => toggle()}
        />
        <span className={styles.on} />
        </label>
    </div>
  );
};

export default ToggleButton;