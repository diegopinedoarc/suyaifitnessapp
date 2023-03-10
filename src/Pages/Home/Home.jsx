import React from "react";
import ActivitiesSection from "../../Components/ActivitiesSection/ActivitiesSection";
import { HomeWrapper } from "./HomeStyle";
import Hero from "../../Components/Hero/Hero";
import Divisor from "../../Components/DivisorSecciones/Divisor";

const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <Divisor />
      <ActivitiesSection />
    </HomeWrapper>
  );
};

export default Home;
