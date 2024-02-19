import React, { FunctionComponent } from "react";
import ContactInfo from "./ContactInfo/ContactInfo";
import classes from "./GetInTouch.module.scss";

const GetInTouch: FunctionComponent = () => {
  return (
    <div>
      <h2 className={classes.GetInTouch__title}>Get In Touch</h2>
      <ContactInfo />
    </div>
  );
};

export default GetInTouch;
