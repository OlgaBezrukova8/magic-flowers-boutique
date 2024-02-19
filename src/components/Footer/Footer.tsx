import React from "react";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

import Image from "../UI/Image/Image";
import navLinkData from "../Navigation/data/navigationData";
import onScrollToTop from "../UI/NavigationLink/services/onScrollToTop";
import logo from "../../images/logo.png";
import classes from "./Footer.module.scss";
import NavigationLink from "../UI/NavigationLink/NavigationLink";

interface contactsProps {
  id: string;
  icon: any;
  description: string;
}

interface socialMediaProps {
  icon: any;
  link: string;
}

const contactsData: contactsProps[] = [
  {
    id: "address",
    icon: <HiLocationMarker size={24} />,
    description: "Los Angeles, California 34846",
  },
  { id: "email", icon: <HiMail size={24} />, description: "support@magic.com" },
  { id: "phone", icon: <HiPhone size={24} />, description: "(664) 000-0000" },
];

const socialMediaData: socialMediaProps[] = [
  {
    icon: <AiFillInstagram size={30} />,
    link: "https://www.instagram.com/",
  },
  {
    icon: <AiFillFacebook size={30} />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <AiFillLinkedin size={30} />,
    link: "https://www.linkedin.com/",
  },
  {
    icon: <AiFillTwitterCircle size={30} />,
    link: "https://twitter.com/",
  },
];

// TODO: fix "target Element not found when clicks on the header and the footer logo"

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <NavigationLink to="/" onClick={onScrollToTop}>
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

        <div className={classes.footer__social}>
          {socialMediaData.map(({ icon, link }, index) => (
            <div
              key={`social-${index + 1}`}
              className={classes.footer__social_iconBox}
            >
              <a
                href={link}
                target="_blank"
                className={classes.footer__social_link}
              >
                <span className={classes.footer__social_icon}>{icon}</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className={classes.footer__title}>Get In Touch</h2>

        {contactsData.map(({ id, icon, description }) => (
          <div key={id} className={classes.footer__contacts}>
            <span className={classes.footer__contacts_icon}>{icon}</span>
            {id === "email" ? (
              <a
                href={`mailto:${description}`}
                className={classes.footer__contacts_text}
              >
                {description}
              </a>
            ) : id === "phone" ? (
              <a
                href={`tel:${description}`}
                className={classes.footer__contacts_text}
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
                className={classes.footer__contacts_text}
              >
                {description}
              </a>
            )}
          </div>
        ))}
      </div>

      <div>
        <h2 className={classes.footer__title}>Quicklinks</h2>

        {navLinkData.map(({ name, source }, index) => (
          <div key={`${name}${index}`}>
            <NavigationLink
              to={source}
              spy={true}
              smooth={true}
              duration={500}
              className={classes.footer__contacts_text}
            >
              {name}
            </NavigationLink>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
