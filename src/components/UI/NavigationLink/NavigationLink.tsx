import React, { FunctionComponent } from "react";
import { Link as ScrollLink } from "react-scroll";

interface LinkProps {
  to: string;
  children: React.ReactNode;
  key?: string;
  className?: string;
  activeClass?: string;
  onClick?: () => void;
  spy?: boolean;
  smooth?: boolean;
  offset?: number;
  duration?: number;
}

const NavigationLink: FunctionComponent<LinkProps> = ({
  to,
  className,
  children,
  activeClass,
  onClick,
  spy,
  smooth,
  offset,
  duration,
}) => {
  const linkClasses = className || "";

  return (
    <ScrollLink
      to={to}
      className={linkClasses}
      activeClass={activeClass}
      onClick={onClick}
      spy={spy}
      smooth={smooth}
      offset={offset}
      duration={duration}
    >
      {children}
    </ScrollLink>
  );
};

export default NavigationLink;
