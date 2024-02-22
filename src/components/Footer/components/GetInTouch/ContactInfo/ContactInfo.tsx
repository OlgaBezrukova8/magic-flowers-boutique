import React, { FunctionComponent } from "react";
import { contactsData } from "../../../Footer";
import classes from "./ContactInfo.module.scss";

const ContactInfo: FunctionComponent = () => {
  return (
    <>
      {contactsData.map(({ id, icon, description }) => (
        <div key={id} className={classes.ContactInfo}>
          <span className={classes.ContactInfo__icon}>{icon}</span>
          {id === "email" ? (
            <a
              href={`mailto:${description}`}
              className={classes.ContactInfo__text}
            >
              {description}
            </a>
          ) : id === "phone" ? (
            <a
              href={`tel:${description}`}
              className={classes.ContactInfo__text}
            >
              {description}
            </a>
          ) : (
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                description
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.ContactInfo__text}
            >
              {description}
            </a>
          )}
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
