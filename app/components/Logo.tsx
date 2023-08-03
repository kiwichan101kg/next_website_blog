import Link from "next/link";
import React from "react";
import styles from "../styles/logo.module.css";

type LogoProps = {
  boxOn?: boolean;
};

const Logo = ({ boxOn = false }: LogoProps) => {
  return (
    <Link className={boxOn ? styles.box : styles.basic} href={"/"}>
      CUBE
    </Link>
  );
};

export default Logo;
