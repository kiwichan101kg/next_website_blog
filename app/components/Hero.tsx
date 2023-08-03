import React from "react";
import styles from "../styles/hero.module.css";

type HeroProps = {
  title: string;
  subTitle: string;
  imageOn?: boolean;
};

const Hero = ({ title, subTitle, imageOn = false }: HeroProps) => {
  return (
    <div>
      <div className={styles.flexContainer}>
        <div className={styles.text}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subTitle}</p>
        </div>
        {imageOn && <figure>[画像]</figure>}
      </div>
    </div>
  );
};

export default Hero;
