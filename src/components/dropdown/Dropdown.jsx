import { useState } from "react"
import styles from "./dropdown.module.scss"
import { FaAngleDown } from "react-icons/fa";


const Dropdown = (props) => {
    const {options, handleChange} = props || null
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState()


    const changeValue = (option) => {
        handleChange(option)
        setSelected(option)
        setOpen(false)
    }
    

    return <div className={styles.dropdownContainer}>
        
            <div className={styles.dropdown} onClick={() => setOpen(!open)}>
                {selected ? selected.label : "Products"}
                <FaAngleDown className={open ? styles.openArrow : styles.icon}/>
            </div>
            <div className={styles.iconDiv}>
                
            </div>
        
        {options && (
            <ul className={`${styles.options} ${open ? styles.open : ""}`}>
                {options.products.map((option) => (
                    <li onClick={() => changeValue(option)} className={styles.option} key={option.id}>{option.label}</li>
                ))}
            </ul>
        )}
        


    </div>
}

export default Dropdown;