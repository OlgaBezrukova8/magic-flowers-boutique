import React, { FunctionComponent } from "react";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

import SocialInfo from "./components/SocialInfo/SocialInfo";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import QuickLinks from "./components/QuickLinks/QuickLinks";

import { contactsProps, socialMediaProps } from "./types/Footer.types";
import classes from "./Footer.module.scss";

// TODO: move contactsData and socialMediaData to separate .ts files

export const contactsData: contactsProps[] = [
  {
    id: "address",
    icon: <HiLocationMarker size={24} />,
    description: "Los Angeles, California 34846",
  },
  { id: "email", icon: <HiMail size={24} />, description: "support@magic.com" },
  { id: "phone", icon: <HiPhone size={24} />, description: "(664) 000-0000" },
];

export const socialMediaData: socialMediaProps[] = [
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

const Footer: FunctionComponent = () => {
  return (
    <footer className={classes.Footer}>
      <SocialInfo />
      <GetInTouch />
      <QuickLinks />
    </footer>
  );
};

export default Footer;
