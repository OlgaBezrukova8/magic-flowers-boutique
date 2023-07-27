import React from "react";
import Section from "../Section";
import Image from "../UI/Image";
import flowersLetter from "../../images/flowers-letter.jpg";
import classes from "./About.module.scss";

const phrasesArray: string[] = [
  "Quick response",
  "Wide selection",
  "Fast delivery",
  "24/7 support",
];

const About: React.FC = () => {
  return (
    <Section className={classes.about}>
      <Image
        source={flowersLetter}
        alt={"Flowers on the letter"}
        width={320}
        className={classes.about__image}
      />

      <div>
        <h2 className={classes.about__title}>About Magic Flowers Boutique</h2>
        <p className={classes.about__text}>
          At Magic Flowers, we are passionate artisans of floral enchantment,
          offering bespoke bouquets and stunning event decorations. With years
          of experience, our floral artisans curate artistry that leaves lasting
          impressions.
        </p>

        <div className={classes.about__phrase_container}>
          {phrasesArray.map((phrase, index) => (
            <div key={`${phrase}${index}`} className={classes.about__phrase}>
              {phrase}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
