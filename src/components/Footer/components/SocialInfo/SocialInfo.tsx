import React, { FunctionComponent } from "react";

import NavigationLink from "../../../UI/NavigationLink/NavigationLink";
import Image from "../../../UI/Image/Image";

import { socialMediaData } from "../../Footer";
import onScrollToTop from "../../../UI/NavigationLink/services/onScrollToTop";

import logo from "../../../../images/logo.png";
import classes from "./SocialInfo.module.scss";

const SocialInfo: FunctionComponent = () => {
  return (
    <div>
      <NavigationLink to="/" onClick={onScrollToTop}>
        <Image
          source={logo}
          alt="Logo of company"
          width={140}
          className={classes.SocialInfo__logo}
        />
      </NavigationLink>

      <p className={classes.SocialInfo__text}>
        Let us enchant your world with the beauty <br /> of flowers and the
        artistry of nature.
      </p>

      <div className={classes.SocialInfo__contentWrapper}>
        {socialMediaData.map(({ icon, link }, index) => (
          <div
            key={`social-${index + 1}`}
            className={classes.SocialInfo__contentWrapper_iconBox}
          >
            <a
              href={link}
              target="_blank"
              className={classes.footer__social_link}
            >
              <span className={classes.SocialInfo__contentWrapper_icon}>
                {icon}
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialInfo;
