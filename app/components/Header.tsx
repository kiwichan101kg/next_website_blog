import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.flexContainer}>
        <Logo boxOn />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
