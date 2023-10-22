import React from "react";
import ImageEatingMan from "../../../../assets/images/image-man-eating.webp";

const BMIResult = () => {
  return (
    <>
      <div className="mt-[2rem] lg:mt-[6rem] mb-20">
        <div className="mx-auto lg:container">
          <div className="grid gap-12 sm:gap-14 md:grid-cols-2 lg:gap-32">
            <div className="flex justify-center lg:justify-start">
              <img
                src={ImageEatingMan}
                alt="man eating food"
                className="object-cover object-right"
              />
            </div>
            <div className="flex items-center">
              <div className="flex flex-col px-5 lg:px-4 lg:item-center md:me-8 ">
                <h2 className="mb-8 font-semibold text-hm sm:text-[2rem] lg:text-hl text-gunmetal leading-lh110 tracking-[-1.6px] lg:tracking-[-2.4px]">
                  What your BMI result means
                </h2>
                <p className="font-normal text-bm text-deblue leading-lh150">
                  A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
                  Maintaining a healthy weight may lower your chances of
                  experiencing health issues later on, such as obesity and type
                  2 diabetes. Aim for a nutritious diet with reduced fat and
                  sugar content, incorporating ample fruits and vegetables.
                  Additionally, strive for regular physical activity, ideally
                  about 30 minutes daily for five days a week.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BMIResult;
