import React, { FunctionComponent } from "react";
import Section from "../UI/Section/Section";
import Image from "../UI/Image/Image";
import flowersPurple from "../../images/flowers-bouquet-purple.jpg";
import flowersWedding from "../../images/flowers-wedding.jpg";
import flowersDecor from "../../images/flowers-bouquet-decor.jpg";
import flowersTulips from "../../images/flowers-tulips.jpg";
import flowersDahlia from "../../images/flowers-dahlia.jpg";
import flowersBasket from "../../images/flowers-basket.jpg";

import classes from "./Services.module.scss";

interface ServicesProps {
  title: string;
  image: any;
  description: string;
  price: string;
}

const servicesData: ServicesProps[] = [
  {
    title: "Enchanted Elegance",
    image: `${flowersPurple}`,
    description:
      "Evoke elegance with a captivating blend of roses, lilies, and baby's breath, ideal for any cherished occasion.",
    price: "$59.99",
  },
  {
    title: "Wonder Centerpiece",
    image: `${flowersDecor}`,
    description:
      "Add charm to your event with our delightful centerpiece, sunflowers, hydrangeas, and seasonal greens.",
    price: "$79.99",
  },
  {
    title: "Timeless Love Roses",
    image: `${flowersBasket}`,
    description:
      "Express eternal love with a dozen handpicked premium red roses, a timeless classic for your beloved.",
    price: "$69.99",
  },
  {
    title: "Celestial Garden",
    image: `${flowersTulips}`,
    description:
      "Celebrate with nature's splendor - vibrant daisies, carnations, and wildflowers, a garden in a bouquet.",
    price: "$64.99",
  },
  {
    title: "Wedding Blush",
    image: `${flowersWedding}`,
    description:
      "Elevate your big day with our regal floral arrangements and customized wedding decor.",
    price: "Custom Quote",
  },
  {
    title: "Embrace Sympathy",
    image: `${flowersDahlia}`,
    description:
      "Convey your heartfelt condolences with a solemn wreath of serene white lilies and roses.",
    price: "$89.99",
  },
];

const Services: FunctionComponent = () => {
  return (
    <Section className={classes.services} id="services">
      <h2 className={classes.services__title}>Our services</h2>
      <p className={classes.services__text}>
        Discover the Luxury <br /> of flowers
      </p>

      <div className={classes.services__container}>
        {servicesData.map(({ title, image, description, price }, index) => (
          <div key={`${title}${index}`} className={classes.services__card}>
            <Image
              source={image}
              alt={title}
              width={150}
              className={classes.services__card_image}
            />
            <h3 className={classes.services__card_title}>{title}</h3>
            <p className={classes.services__card_text}>{description}</p>
            <span className={classes.services__card_price}>{price}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
