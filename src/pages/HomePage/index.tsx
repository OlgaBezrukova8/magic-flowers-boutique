import React from "react";
import Section from "../../components/Section";
import Button from "../../components/UI/Button";

const HomePage: React.FC = () => {
  return (
    <Section>
      <p>
        Welcome to Magic Flowers Boutique - Your Express Floral Artistry in
        Canada!
      </p>
      <h1>Transforming Moments into Memories with Enchanting Blooms.</h1>

      <h2>
        Surprise your loved ones today with our fast and exquisite floral
        creations!
      </h2>

      <Button type="button" onClick={() => {}}>
        Explore our services
      </Button>
    </Section>
  );
};

export default HomePage;
