import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navigation.module.scss";

interface NavLinkProps {
  name: string;
  source: string;
}

const navLinkData: NavLinkProps[] = [
  { name: "Home", source: "/" },
  { name: "About", source: "/" },
  { name: "Services", source: "/" },
  { name: "Testimonials", source: "/" },
];

const Navigation: React.FC = () => {
  const [activeNavLink, setActiveNavLink] = useState<number | null>(null);

  const navLinkClick = (index: number) => {
    setActiveNavLink(index);
  };

  return (
    <>
      {navLinkData.map(({ name, source }, index) => (
        <NavLink
          to={source}
          key={`${name}${index}`}
          className={`${classes.navigation__link} ${
            index === activeNavLink ? classes.navigation__activeLink : ""
          }`}
          onClick={() => navLinkClick(index)}
        >
          {name}
        </NavLink>
      ))}
    </>
  );
};

export default Navigation;
