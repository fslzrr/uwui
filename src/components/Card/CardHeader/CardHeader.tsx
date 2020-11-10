import React from "react";
import styles from "./cardHeader.module.css";

const CardHeader: React.FC = ({ children }) => {
  return <div className={styles.ffCardHeader}>{children}</div>;
};

export default CardHeader;
