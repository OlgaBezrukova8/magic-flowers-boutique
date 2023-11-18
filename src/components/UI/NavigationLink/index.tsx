import React from "react";
import { Link } from "react-router-dom";

interface LinkProps {
  linkTo: string;
  children: React.ReactNode;
  key?: string;
  className?: string;
  activeStyle?: string;
  onClick?: () => void
}

const NavigationLink: React.FC<LinkProps> = ({
  linkTo,
  className,
  children,
  key,
}) => {
  const linkClasses = className || "";

  return (
    <div key={key}>
      <Link to={linkTo} className={linkClasses}>
        {children}
      </Link>
    </div>
  );
};

export default NavigationLink;
