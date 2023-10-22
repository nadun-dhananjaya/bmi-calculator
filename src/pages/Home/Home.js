import React from "react";
import Hero from "./Section/Hero/Hero";
import BMIResult from "./Section/BMIResult/BMIResult";
import Tips from "./Section/Tips/Tips";
import BMILimitation from "./Section/BMILimitation/BMILimitation";

const Home = () => {
  return (
    <>
      <Hero />
      <BMIResult />
      <Tips />
      <BMILimitation />
    </>
  );
};

export default Home;
