import React, { FunctionComponent } from "react";
import NavigationLink from "../../../UI/NavigationLink/NavigationLink";
import navLinkData from "../../../Navigation/data/navigationData";
import classes from "./QuickLinks.module.scss";

const QuickLinks: FunctionComponent = () => {
  return (
    <div>
      <h2 className={classes.QuickLinks__title}>Quicklinks</h2>

      {navLinkData.map(({ name, source }, index) => (
        <div key={`${name}${index}`}>
          <NavigationLink
            to={source}
            spy={true}
            smooth={true}
            duration={500}
            className={classes.QuickLinks__link}
          >
            {name}
          </NavigationLink>
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;
