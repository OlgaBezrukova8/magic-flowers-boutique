import React from "react";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

import Image from "../UI/Image";
import NavigationLink from "../UI/NavigationLink";
import logo from "../../images/logo.png";
import classes from "./Footer.module.scss";

interface contactsProps {
  icon: any;
  description: string;
}

const contactsData: contactsProps[] = [
  { icon: <HiLocationMarker />, description: "Los Angeles, California 34846" },
  { icon: <HiMail />, description: "support@magic.com" },
  { icon: <HiPhone />, description: "(664)000-0000" },
];

const iconsArray = [
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
];

// TODO: create an object with links and icons to map it with NavigationLink component

const Footer: React.FC = () => {
  const icons = iconsArray.map((Icon, index) => (
    <div key={`icon-${index + 1}`} className={classes.footer__social}>
      <Icon className={classes.footer__social_icon} />
    </div>
  ));

  return (
    <footer className={classes.footer}>
      <div>
        <NavigationLink linkTo="/">
          <Image
            source={logo}
            alt="Logo of company"
            width={140}
            className={classes.footer__logo}
          />
        </NavigationLink>

        <p className={classes.footer__text}>
          Let us enchant your world with the beauty <br /> of flowers and the
          artistry of nature.
        </p>

        <div className={classes.footer__social_container}>{icons}</div>
      </div>

      <div>
        <h2 className={classes.footer__title}>Get In Touch</h2>

        {contactsData.map(({ icon, description }, index) => (
          <div key={index} className={classes.footer__contacts}>
            <span className={classes.footer__contacts_icon}>{icon}</span>
            <p className={classes.footer__contacts_text}>{description}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className={classes.footer__title}>Quicklinks</h2>
        {/* TODO: create an object with links and name of links to map it with NavigationLink component */}
      </div>
    </footer>
  );
};

export default Footer;
