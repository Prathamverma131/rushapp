import React from "react";
import logo from "../assets/rushlogo.jpg";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Navbar;
