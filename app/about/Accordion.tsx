"use client";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties, ReactNode, useRef, useState } from "react";
import styles from "./styles/accordion.module.css";

type Props = {
  heading: string;
  children: ReactNode;
};

const Accordion = ({ heading, children }: Props) => {
  const [textIsOpen, setTextIsOpen] = useState<boolean>(false);

  const toggleText = () => {
    setTextIsOpen((prev) => !prev);
  };

  const refText = useRef<HTMLDivElement>(null);

  const textStyle = {
    "--text-height": `${refText.current?.scrollHeight}px`,
  } as CSSProperties;

  return (
    <div className={textIsOpen ? styles.open : styles.close}>
      <h3 className={styles.heading}>
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon
            icon={faArrowAltCircleDown}
            className={styles.icon}
          />
        </button>
      </h3>
      {textIsOpen && (
        <div className={styles.text} ref={refText} style={textStyle}>
          <div className={styles.textInner}>{children}</div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
