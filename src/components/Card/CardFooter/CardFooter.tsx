import React from "react";
import styles from "./cardFooter.module.css";

const CardFooter: React.FC = ({ children }) => {
  return <div className={styles.ffCardFooter}>{children}</div>;
};

export default CardFooter;
