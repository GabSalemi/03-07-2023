import styles from "./navbar.module.scss";
import { useState } from "react";
import Dropdown from "../dropdown";

const Navbar = () => {
    
    const [dropdownValue, setDropdownValue] = useState()
     const products = {
        name: "Products",
        id: "products",
        products: [
            {
                id: 1, 
                label: "Games",
                value: "games"
            },
            {
                id:2,
                label: "Gadget",
                value: "gadget"
            },
            {
                id: 3,
                label: "Other",
                value: "Other"
            }
        ]
    }


    return <div className={styles.navbar__div}>
        <ul className={`${styles.menu} ${styles.row}`}>
            <li className="col-4">About</li>
            <li className="col-4">Contact</li>
            <li className="col-4"><Dropdown options={products} handleChange={setDropdownValue}/></li>
        </ul>
        <div className="logo__div">
            <img src="" alt="" />
        </div>
    </div>
}

export default Navbar;