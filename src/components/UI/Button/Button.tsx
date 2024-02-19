import React, { FunctionComponent } from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  type: "button" | "submit" | "reset" | undefined;
  key?: string | null;
  disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  onClick,
  children,
  className,
  type,
  key,
  disabled,
}) => {
  const buttonClasses = className || "";

  return (
    <button
      className={buttonClasses}
      type={type}
      onClick={onClick}
      key={key}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
