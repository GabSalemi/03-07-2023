import Button from "../button";
import styles from "./form.module.scss";
import { BsFillSendFill } from "react-icons/bs";


const Form = () => {
    return <form className={styles.form__div}>
        <label htmlFor="username" className={styles.label}>Your username</label>
        <input className={styles.input}/>
        <label htmlFor="password" className={styles.label}>Your password</label>
        <input type="password" className={styles.input}/>
        <label htmlFor="age" className={styles.label}>Your age</label>
        <input type="number" className={styles.input}/>
        <label className={styles.label}>About you</label>
        <textarea name="" id="" cols="30" rows="10" className={styles.input}></textarea>
        <Button label="Sent!" icon={<BsFillSendFill className="icon"/>} round/>
    </form>
}

export default Form;