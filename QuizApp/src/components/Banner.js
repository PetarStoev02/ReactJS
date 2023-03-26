import React from "react";
import styles from "./Banner.module.css"
import banner from '../img/Banner.png';

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.left_content}>
            <h1 >Easy online quiz maker</h1>
            <p >Unlock your knowledge with every question, every day!</p>
            <button >Sign up for free</button>
            </div>
            <div className={styles.right_content}>
                <img src={banner} alt=""/>
            </div>
        </div>
    )
}