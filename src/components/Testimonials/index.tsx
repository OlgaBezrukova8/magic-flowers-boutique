import React from "react";
import { FcBusinesswoman, FcBusinessman } from "react-icons/fc";
import Section from "../UI/Section";
import Image from "../UI/Image";
import people from "../../images/people.jpg";
import starIcon from "../../assets/icons/star.svg";
import classes from "./Testimonials.module.scss";

const Testimonials: React.FC = () => {
  const numberOfIcons = 5;
  const icons = Array.from({ length: numberOfIcons }, (_, index) => (
    <Image
      key={index}
      source={starIcon}
      alt="Star Icon"
      className={classes.testimonials__container_icon}
    />
  ));

  return (
    <Section className={classes.testimonials} id="testimonials">
      <h2 className={classes.testimonials__title}>Testimonials</h2>
      <p className={classes.testimonials__text}>
        What Customers Say <br />
        About Us
      </p>

      <div className={classes.testimonials__container}>
        <Image source={people} alt={"Star"} width={350} />
        <div className={classes.testimonials__container_card}>
          <div>{icons}</div>
          <p className={classes.testimonials__container_text}>
            Magic Flowers Boutique created the most exquisite bouquet for my
            anniversary. My partner was thrilled! Fast delivery! Quick answer!
          </p>

          <div className={classes.testimonials__container_person}>
            <FcBusinesswoman
              className={classes.testimonials__container_person_icon}
            />
            <p className={classes.testimonials__container_person_text}>
              Sarah W.
            </p>
          </div>
        </div>
        <div className={classes.testimonials__container_card}>
          <div>{icons}</div>
          <p className={classes.testimonials__container_text}>
            Absolutely stunning wedding decor! Magic Flowers Boutique turned our
            dream wedding into a fairytale. The best decorations ever!
          </p>

          <div className={classes.testimonials__container_person}>
            <FcBusinessman
              className={classes.testimonials__container_person_icon}
            />
            <p className={classes.testimonials__container_person_text}>
              Michael & Emily P.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
