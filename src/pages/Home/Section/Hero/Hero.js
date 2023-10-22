import React from "react";
import "./Hero.css";
import logo from "./../../../../assets/images/logo.svg";
import BmiCal from "./Component/BmiCal";

const Hero = () => {
  return (
    <>
      <section id="hero-section" className="relative max-w-full">
        <div className="container relative z-30 flex items-center justify-center h-32 px-2 mx-auto lg:px-16 lg:justify-start">
          <img src={logo} alt="logo of body mass index calculator" />
        </div>
        <div className="container mx-auto ">
          <div className="relative z-20 grid lg:grid-cols-2">
            <div className="px-2 lg:px-16 ">
              <div className="lg:max-w-[29rem] w-full">
                <h1 className="mb-8 lg:mt-20 font-semibold text-hl lg:text-hxl text-gunmetal leading-lh110 tracking-[-3.2px] text-center lg:text-start">
                  Body Mass <br />
                  Index <br className="xs:hidden" /> Calculator
                </h1>
                <p className="self-stretch font-normal text-center text-bm leading-lh150 text-deblue lg:text-start ">
                  Better understand your weight in relation to your height using
                  our body mass index (BM) calculator. While BMI is not the sole
                  determinant of a healthy weight, it offers a valuable starting
                  point to evaluate your overall health and well-being.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center px-2 mt-3 lg:px-0 lg:mt-0">
              <BmiCal />
            </div>
          </div>
          <div
            id="hero-gradiant"
            className="absolute top-0 left-0 w-full lg:w-[70%] rounded-b-[35px] hero-gradiant h-[40rem] lg:h-[43.75rem] lg:left-4 "
          ></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
