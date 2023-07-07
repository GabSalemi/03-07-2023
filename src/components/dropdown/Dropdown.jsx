import { useState } from "react"
import styles from "./dropdown.module.scss"
import { FaAngleDown } from "react-icons/fa";


const Dropdown = (props) => {
    const {options, handleChange} = props || null
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState()
    const [openSub, setOpenSub] = useState(false)


    const changeValue = (option) => {
        handleChange(option)
        setSelected(option)
        setOpen(false)
        
    }

    const changeValueSub = (items, index) => {
        setOpenSub(!openSub)
       
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
                    <div className={styles.subDropdownDiv}>
                        <li onClick={() => changeValueSub(option.items, option.id)} className={styles.option} key={option.id}>{option.label}
                        {option.items && <FaAngleDown className={open ? styles.rightArrow : styles.icon}/>}
                        </li>
                        
                        <ul className={`${styles.subDropdown} ${styles.label} ${openSub ? styles.openRight : ""}`}>
                            {option?.items?.map((item) => 
                            <li 
                                className={styles.item} 
                                key={item.id}
                                onClick={() => changeValue(option)} 
                            >{item.label}
                            </li>
                            )  }
                        </ul>
                    </div>
                ))}
            </ul>
        )}
        


    </div>
}

export default Dropdown;