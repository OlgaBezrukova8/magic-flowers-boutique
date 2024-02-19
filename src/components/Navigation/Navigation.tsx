import React, { FunctionComponent, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import navLinkData from "./data/navigationData";
import classes from "./Navigation.module.scss";

const Navigation: FunctionComponent = () => {
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
