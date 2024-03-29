import React, { FunctionComponent } from "react";
import Section from "../UI/Section/Section";
import Button from "../UI/Button/Button";
import classes from "./Hero.module.scss";

const Hero: FunctionComponent = () => {
  const scrollToServices = () => {
    const servicesElement = document.getElementById("services");

    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section className={classes.hero} id="home">
      <p className={classes.hero__text}>Welcome to Magic Flowers Boutique</p>
      <h1 className={classes.hero__title_main}>
        Transforming <br /> Moments into <br /> Memories
      </h1>

      <h2 className={classes.hero__title}>
        Surprise your loved ones today
        <br /> with our fast and exquisite floral creations!
      </h2>

      <Button
        className={classes.hero__button}
        type="button"
        onClick={scrollToServices}
      >
        Explore our services
      </Button>
    </Section>
  );
};

export default Hero;
