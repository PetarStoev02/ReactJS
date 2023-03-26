import React from "react";
import styles from "./Header.module.css"

export default function Header() {
  return (
    <div className={styles.header} >
      <a href="#" className={styles.logo}>
        QuizApp
      </a>
      <div className={styles.headerRight}>
        <a href="#">
          Browse
        </a>
        <a href="#">Login</a>
        <button>Sign Up</button>
        
      </div>
    </div>
  );
}
