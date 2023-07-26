import React from "react";

import NavigationLink from "../UI/NavigationLink";
import Navigation from "../Navigation";
import Button from "../UI/Button";
import Image from "../UI/Image";
import logo from "../../images/logo.png";
import classes from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div>
        <NavigationLink linkTo="/">
          <Image source={logo} alt="Logo of company" width={140} />
        </NavigationLink>
      </div>

      <nav className={classes.header__navigation}>
        <Navigation />
      </nav>

      <Button
        type="button"
        onClick={() => {
          console.log("Open modal with form to contact");
        }}
        className={classes.header__button}
      >
        Contact Us
      </Button>
    </header>
  );
};

export default Header;
