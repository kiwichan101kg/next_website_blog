import React from "react";

type HeroProps = {
  title: string;
  subTitle: string;
};

const Hero = ({ title, subTitle }: HeroProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
};

export default Hero;
