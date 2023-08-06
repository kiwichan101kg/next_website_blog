import React from "react";
import Logo from "./Logo";
import styles from "../styles/footer.module.css";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          [ソーシャル]
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
