import React from "react";
import styles from "./card.module.css";

const Card: React.FC = ({ children }) => {
  return <div className={styles.ffCard}>{children}</div>;
};

export default Card;
