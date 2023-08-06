import React, { ReactNode } from "react";
import styles from "../styles/container.module.css";

type ContainerType = {
  children: ReactNode;
  large?: boolean;
};

const Container = ({ children, large = false }: ContainerType) => {
  return (
    <div className={large ? styles.large : styles.default}>{children}</div>
  );
};

export default Container;
