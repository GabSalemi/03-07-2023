import { useState, useEffect } from "react";
import styles from "./hero.module.scss";
import Button from "../button";
import { GiWorld, GiBlackBook, GiCharacter } from "react-icons/gi";

const Hero = () => {
    

    return <div className={styles.hero__section}>
        <div className={styles.video__container}>
            <video src=""></video>
        </div>
        <div className={styles.text__container}>
            <h1 className={styles.title}>Lorem</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quod.</p>
            <div className={styles.button__div}>
                <Button label="World" icon={<GiWorld />} round outline />
                <Button label="Peoples" icon={<GiCharacter />} round outline />
                <Button label="History" icon={<GiBlackBook />} round outline />
            </div>
        </div>
    </div>
}

export default Hero