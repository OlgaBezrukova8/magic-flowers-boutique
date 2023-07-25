import React from "react";
import { NavLink } from "react-router-dom";

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
      <NavLink to={linkTo} className={linkClasses}>
        {children}
      </NavLink>
    </div>
  );
};

export default NavigationLink;
