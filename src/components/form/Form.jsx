import Button from "../button";
import styles from "./form.module.scss";
import { BsFillSendFill } from "react-icons/bs";
import InputText from "../inputText";
import InputPassword from "../inputPassword/InputPassword";
import InputEmail from "../inputEmail";
import InputSelect from "../inputSelect";
import ToggleButton from "../toggleButton";


const Form = () => {
    return <form className={styles.form__div}>
        <InputText 
        id="username"
        label="Username"
        name="Username"
        line
        placeholder="Your username"
        errorMessage="The username entered is too long"/>
        <InputPassword id="password"
        label="Password"
        name="Password"
        line
        icon
        placeholder="Your Password"
        errorMessage="Your password is too short"/>
        <InputEmail id="email"
        label="E-mail"
        name="Email"
        line
        icon
        placeholder="Your e-mail"
        errorMessage="Your e-main is incorrect"/>
        <InputSelect label="Language"/>
        <div className={styles.buttonsDiv}>
            <ToggleButton on={true} label={"Save your data"}/>
            <Button label="Sent!" icon={<BsFillSendFill className="icon"/>} round/>
        </div>
    </form>
}

export default Form;