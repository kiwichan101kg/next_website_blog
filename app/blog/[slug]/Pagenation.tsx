import {
  faSquareCaretLeft,
  faSquareCaretRight,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styles from "../styles/pagenation.module.css";

type prevNextPost = {
  prevText?: string;
  prevUrl?: string;
  nextText?: string;
  nextUrl?: string;
};

const Pagenation = ({ prevText, prevUrl, nextText, nextUrl }: prevNextPost) => {
  return (
    <ul className={styles.flexContainer}>
      {prevText && prevUrl && (
        <li>
          <Link href={prevUrl} className={styles.iconText}>
            <FontAwesomeIcon icon={faSquareCaretLeft} color="var(--gray-25)" />
            <span>{prevText}</span>
          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={styles.next}>
          <Link href={nextUrl} className={styles.iconText}>
            <span>{nextText}</span>
            <FontAwesomeIcon icon={faSquareCaretRight} color="var(--gray-25)" />
          </Link>
        </li>
      )}
    </ul>
  );
};

export default Pagenation;
