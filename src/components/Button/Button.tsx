import React, { useMemo } from "react";
import styles from "./button.module.css";

type ButtonTypes = "default" | "secondary" | "destructive";
const TypeStyles: Record<ButtonTypes, string> = {
  default: styles.ffButtonDefault,
  secondary: styles.ffButtonSecondary,
  destructive: styles.ffButtonDestructive,
};

type ButtonStatus = "stretch";
const StatusStyles: Record<ButtonStatus, string> = {
  stretch: styles.ffButtonStretch,
};

function getStatusStyles(args: Record<ButtonStatus, boolean>) {
  return Object.entries(args).reduce((acum, [status, val]) => {
    const statusStyle = val ? StatusStyles[status] : "";
    return `${acum} ${statusStyle}`;
  }, "");
}

type ButtonProps = {
  type?: ButtonTypes;
  stretch?: boolean;
  children: JSX.Element;
} & React.HTMLProps<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  type = "default",
  stretch = false,
  children,
  ...rest
}: ButtonProps) => {
  const statusStyles = useMemo(() => getStatusStyles({ stretch }), [stretch]);

  return (
    <button
      className={`${styles.ffButton} ${TypeStyles[type]} ${statusStyles}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export type { ButtonProps };
export default Button;
