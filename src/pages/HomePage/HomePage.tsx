import React, { FunctionComponent } from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Testimonials from "../../components/Testimonials/Testimonials";

const HomePage: FunctionComponent = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </>
  );
};

export default HomePage;
