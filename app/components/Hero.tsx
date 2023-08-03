import React from "react";
import style from "../styles/hero.module.css";

type HeroProps = {
  title: string;
  subTitle: string;
  imageOn?: boolean;
};

const Hero = ({ title, subTitle, imageOn = false }: HeroProps) => {
  return (
    <div>
      <div className={style.text}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.subtitle}>{subTitle}</p>
      </div>
      {imageOn && <figure>[画像]</figure>}
    </div>
  );
};

export default Hero;
