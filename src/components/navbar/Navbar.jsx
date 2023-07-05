import styles from "./navbar.module.scss";

const Navbar = () => {
    return <div className={styles.navbar__div}>
        <ul className={`${styles.menu} ${styles.row}`}>
            <li className="col-4">About</li>
            <li className="col-4">Contact</li>
            <li className="col-4">Buy</li>
        </ul>
        <div className="logo__div">
            <img src="" alt="" />
        </div>
    </div>
}

export default Navbar;