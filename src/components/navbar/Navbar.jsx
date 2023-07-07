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
                value: "gadget",
                items: [{
                    id: 1,
                    label: "Model",
                    value: "model",
                }, {
                    id: 2,
                    label: "Cards",
                    value: "cards",
                }, {
                    id: 3,
                    label: "Other",
                    value: "other",
                }]
            },
            {
                id: 3,
                label: "Other",
                value: "other",
                items: [{
                    id: 1,
                    label: "Books",
                    value: "books",
                }, {
                    id: 2,
                    label: "Comics",
                    value: "comics",
                }, {
                    id: 3,
                    label: "Music",
                    value: "music",
                }]
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