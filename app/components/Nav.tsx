"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/nav.module.css";

const Nav = () => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}
      <button
        className={styles.btn}
        onClick={() => setNavIsOpen((prev) => !prev)}
      >
        <span className={styles.bar}></span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href={"/"} onClick={() => setNavIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/about"} onClick={() => setNavIsOpen(false)}>
            About
          </Link>
        </li>
        <li>
          <Link href={"/blog"} onClick={() => setNavIsOpen(false)}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
