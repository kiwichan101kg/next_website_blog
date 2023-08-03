import Link from "next/link";
import React from "react";
import styles from "../styles/nav.module.css";

const Nav = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
