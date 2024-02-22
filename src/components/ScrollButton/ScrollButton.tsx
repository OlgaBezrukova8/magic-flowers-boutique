import React, { FunctionComponent, useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Button from "../UI/Button/Button";
import classes from "./ScrollButton.module.scss";

// TODO: work with animation

const ScrollButton: FunctionComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollEvent = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <Button
      className={
        isVisible
          ? `${classes.ScrollButton} ${classes.ScrollButton_visible}`
          : ""
      }
      onClick={scrollToTop}
      type="button"
    >
      <IoIosArrowUp className={classes.ScrollButton__icon} />
    </Button>
  );
};

export default ScrollButton;
