import React from "react";
// Font Awesome 個々(コンポーネントごと)にインポート
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/social.module.css";
import {
  IconDefinition,
  faTwitter,
  faGithub,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

type SocialProps = {
  iconSize?: string;
};

const Social = ({ iconSize = "initial" }: SocialProps) => {
  const listStyle = {
    "--icon-size": iconSize,
  } as React.CSSProperties;

  return (
    <div>
      <ul className={styles.list} style={listStyle}>
        <li>
          <a href="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} />
            {/* <span className="sr-only">Twitter</span> */}
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebookF} />
            {/* <span className="sr-only">Facebook</span> */}
          </a>
        </li>
        <li>
          <a href="https://github.com/">
            <FontAwesomeIcon icon={faGithub} />
            {/* <span className="sr-only">GitHub</span> */}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
