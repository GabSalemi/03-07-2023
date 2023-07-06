import styles from "./inputSelect.module.scss";

const InputSelect = (props) => {
    const {
        label
    } = props || null

    const options = {
        name: "language",
        id: "language",
        options: [
          {
            id: 1,
            label: "English",
            value: "english",
          },
          {
            id: 2,
            label: "Francais",
            value: "french",
          },
          {
            id: 3,
            label: "Italiano",
            value: "italian",
          },
          {
            id: 4,
            label: "Espanol",
            value: "Spanish",
          },
          {
            id: 5,
            label: "Deutsch",
            value: "German",
          }
        ],
      };


    return <div className={styles.inputContainer}>
        {label && <label className={styles.label}>{label}</label>}
        {options.options && <select className={styles.inputDiv}
        name={options.name}
        id={options.id}
        defaultValue={"Select your language"}
        onChange={(e) => handleChange(e.target.value)}>
            {options?.options?.map((option) => (
                <option key={option.id} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    }
        
    </div>
}

export default InputSelect;