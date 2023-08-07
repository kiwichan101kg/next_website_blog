import { ReactNode } from "react";
import styles from "../styles/post-body.module.css";

const PostBody = ({ children }: { children: ReactNode }) => {
  return <div className={styles.stack}>{children}</div>;
};

export default PostBody;
