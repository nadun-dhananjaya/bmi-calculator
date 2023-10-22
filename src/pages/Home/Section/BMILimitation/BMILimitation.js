import React from "react";
import Gender from "./../../../../assets/images/icon-gender.svg";
import Age from "./../../../../assets/images/icon-age.svg";
import Muscle from "./../../../../assets/images/icon-muscle.svg";
import Pregnancy from "./../../../../assets/images/icon-pregnancy.svg";
import Race from "./../../../../assets/images/icon-race.svg";

const BMILimitation = () => {
  return (
    <div className="my-10">
      <div className="px-5 mx-auto lg:container">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="font-semibold text-hl text-gunmetal leading-lh110 tracking-[-2.4px]">
              Limitations of BMI
            </h2>
            <p className="mt-8 font-normal text-deblue text-bm leading-lh150">
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>

          <div className="col-span-12 lg:flex sm:col-span-6 lg:justify-center">
            <div className="w-full  h-full p-8 bmi-card-shadow  lg:max-w-[23rem] rounded-2xl">
              <div className="flex flex-row items-center gap-4 mb-4">
                <img src={Gender} alt="icon of gender" className="w-8 h-8" />
                <h2 className="font-semibold tracking-[-1px] text-xl">
                  Gender
                </h2>
              </div>
              <p className="font-normal text-bm leading-lh150 text-deblue ">
                The development and body fat composition of girls and boys vary
                with age. Consequently, a child's age and gender are considered
                when evaluating their BMI.
              </p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-7 xl:col-span-8 lg:justify-end lg:flex">
            <div className="w-full p-8 bmi-card-shadow  lg:max-w-[23rem] rounded-2xl  h-full">
              <div className="flex flex-row items-center gap-4 mb-4 ">
                <img src={Age} alt="icon of gender" className="w-8 h-8" />
                <h2 className="font-semibold tracking-[-1px] text-xl">Age</h2>
              </div>
              <p className="font-normal text-bm leading-lh150 text-deblue ">
                In aging individuals, increased body fat and muscle loss may
                cause BMI to underestimate body fat content.
              </p>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-5 xl:col-span-4 lg:justify-start lg:flex">
            <div className="w-full  h-full p-8 bmi-card-shadow  lg:max-w-[23rem] rounded-2xl">
              <div className="flex flex-row items-center gap-4 mb-4">
                <img src={Muscle} alt="icon of gender" className="w-8 h-8" />
                <h2 className="font-semibold tracking-[-1px] text-xl">
                  Muscle
                </h2>
              </div>
              <p className="font-normal text-bm leading-lh150 text-deblue ">
                BMI may misclassify muscular individuals as overweight or obese,
                as it doesn't differentiate muscle from fat.
              </p>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 lg:justify-end lg:flex">
            <div className="w-full h-full p-8  bmi-card-shadow  lg:max-w-[23rem] rounded-2xl">
              <div className="flex flex-row items-center gap-4 mb-4">
                <img src={Pregnancy} alt="icon of gender" className="w-8 h-8" />
                <h2 className="font-semibold tracking-[-1px] text-xl">
                  Pregnancy
                </h2>
              </div>
              <p className="font-normal text-bm leading-lh150 text-deblue ">
                Expectant mothers experience weight gain due to their growing
                baby. Maintaining a healthy pre-pregnancy BMI is advisable to
                minimise health risks for both mother and child.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 sm:justify-center lg:justify-start sm:flex">
            <div className="w-full sm:w-1/2 lg:w-full  p-8 bmi-card-shadow lg:max-w-[23rem] rounded-2xl h-full">
              <div className="flex flex-row items-center gap-4 mb-4">
                <img src={Race} alt="icon of gender" className="w-8 h-8" />
                <h2 className="font-semibold tracking-[-1px] text-xl">Race</h2>
              </div>
              <p className="font-normal text-bm leading-lh150 text-deblue ">
                Certain health concerns may affect individuals of some Black and
                Asian origins at lower BMIs than others. To learn more, it is
                advised to discuss this with your GP or practice nurse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMILimitation;
