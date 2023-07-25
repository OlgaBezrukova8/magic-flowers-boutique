import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  type: "button" | "submit" | "reset" | undefined;
  key?: string | null;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
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
