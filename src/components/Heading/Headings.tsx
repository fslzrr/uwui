import React from "react";
import styles from "./headings.module.css";

type HeadingTypes = "primary" | "colorless" | "secondary";
const TypeStyles: Record<HeadingTypes, string> = {
  primary: styles.ffHeadingPrimary,
  colorless: styles.ffHeadingColorless,
  secondary: styles.ffHeadingSecondary,
};

type HeadingProps = {
  type?: HeadingTypes;
};

const H1: React.FC<HeadingProps> = ({ type = "primary", children }) => {
  return (
    <h1 className={`${styles.ffHeading} ${TypeStyles[type]} ${styles.ffH1}`}>
      {children}
    </h1>
  );
};

const H2: React.FC<HeadingProps> = ({ type = "primary", children }) => {
  return (
    <h2 className={`${styles.ffHeading} ${TypeStyles[type]} ${styles.ffH2}`}>
      {children}
    </h2>
  );
};

const H3: React.FC<HeadingProps> = ({ type = "primary", children }) => {
  return (
    <h3 className={`${styles.ffHeading} ${TypeStyles[type]} ${styles.ffH3}`}>
      {children}
    </h3>
  );
};

const H4: React.FC<HeadingProps> = ({ type = "primary", children }) => {
  return (
    <h4 className={`${styles.ffHeading} ${TypeStyles[type]} ${styles.ffH4}`}>
      {children}
    </h4>
  );
};

const H5: React.FC<HeadingProps> = ({ type = "primary", children }) => {
  return (
    <h5 className={`${styles.ffHeading} ${TypeStyles[type]} ${styles.ffH5}`}>
      {children}
    </h5>
  );
};

const H6: React.FC<HeadingProps> = ({ type = "primary", children }) => {
  return (
    <h6 className={`${styles.ffHeading} ${TypeStyles[type]} ${styles.ffH6}`}>
      {children}
    </h6>
  );
};

export { H1, H2, H3, H4, H5, H6 };
