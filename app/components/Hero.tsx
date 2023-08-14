import React from "react";
import styles from "../styles/hero.module.css";
import Image from "next/image";
import cube from "../images/cube.jpg";

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
        {imageOn && (
          <figure className={styles.image}>
            <Image
              src={cube}
              alt="空飛ぶロケット"
              width={1980}
              height={1150}
              // sizes="(min-width:1152px)576px,(min-width:768px)50vw,100vw"
              layout="responsive"
              priority
              placeholder="blur"
            />
          </figure>
        )}
      </div>
    </div>
  );
};

export default Hero;
