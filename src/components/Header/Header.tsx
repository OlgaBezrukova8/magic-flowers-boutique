import React, { FunctionComponent } from "react";

import NavigationLink from "../UI/NavigationLink/NavigationLink";
import Navigation from "../Navigation/Navigation";
import Button from "../UI/Button/Button";
import Image from "../UI/Image/Image";
import onScrollToTop from "../UI/NavigationLink/services/onScrollToTop";
import logo from "../../images/logo.png";
import classes from "./Header.module.scss";

// TODO: fix "target Element not found"

const Header: FunctionComponent = () => {
  return (
    <header className={classes.Header__container}>
      <div>
        <NavigationLink to="/" onClick={onScrollToTop}>
          <Image source={logo} alt="Logo of company" width={140} />
        </NavigationLink>
      </div>

      <nav className={classes.Header__navigation}>
        <Navigation />
      </nav>

      <Button
        type="button"
        onClick={() => {
          console.log("Open modal with form to contact");
        }}
        className={classes.Header__button}
      >
        Contact Us
      </Button>
    </header>
  );
};

export default Header;
