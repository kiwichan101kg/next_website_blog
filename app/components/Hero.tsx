import React from "react";

type HeroProps = {
  title: string;
  subTitle: string;
  imageOn?: boolean;
};

const Hero = ({ title, subTitle, imageOn = false }: HeroProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      {imageOn && <figure>[画像]</figure>}
    </div>
  );
};

export default Hero;
