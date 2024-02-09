import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import classes from "./Navigation.module.scss";

interface NavLinkProps {
  name: string;
  source: string;
}

const navLinkData: NavLinkProps[] = [
  { name: "Home", source: "home" },
  { name: "About", source: "about" },
  { name: "Services", source: "services" },
  { name: "Testimonials", source: "testimonials" },
];

const Navigation: React.FC = () => {
  const [activeNavLink, setActiveNavLink] = useState<number | null>(0);

  const navLinkClick = (index: number) => {
    setActiveNavLink(index);
  };

  return (
    <>
      {navLinkData.map(({ name, source }, index) => (
        <ScrollLink
          to={source}
          key={`${name}${index}`}
          className={`${classes.navigation__link} ${
            index === activeNavLink ? classes.navigation__activeLink : ""
          }`}
          onClick={() => navLinkClick(index)}
          spy={true}
          smooth={true}
          // offset={-20}
          duration={500}
          activeClass="active"
        >
          {name}
        </ScrollLink>
      ))}
    </>
  );
};

export default Navigation;
