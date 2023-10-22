import React from "react";
import Eating from "./../../../../assets/images/icon-eating.svg";
import Exercise from "./../../../../assets/images/icon-exercise.svg";
import Sleep from "./../../../../assets/images/icon-sleep.svg";

const Tips = () => {
  return (
    <div className="my-20">
      <div className="rounded-md lg:mx-6 bg-slate-100">
        <div className="px-5 mx-auto lg:container">
          <div className="grid gap-8 py-14 lg:py-20 md:px-10 lg:grid-cols-3">
            <div className="flex flex-col items-start gap-10 md:items-center lg:items-start sm:flex-row lg:flex-col">
              <img src={Eating} className="w-16 h-16" />
              <div>
                <h2 className="mb-6 text-gunmetal font-semibold leading-normal text-hm tracking-[-1.2px]">
                  Healthy eating
                </h2>
                <p className="font-normal text-bm text-deblue leading-lh150">
                  Healthy eating promotes weight control, disease prevention,
                  better digestion, immunity, mental clarity, and mood.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-10 md:items-center lg:items-start sm:flex-row lg:flex-col">
              <img src={Exercise} className="w-16 h-16" />
              <div>
                <h2 className="mb-6 text-gunmetal font-semibold  leading-normal text-hm tracking-[-1.2px]">
                  Regular exercise
                </h2>
                <p className="font-normal text-bm text-deblue leading-lh150">
                  Exercise improves fitness, aids weight control, elevates mood,
                  and reduces disease risk, fostering wellness and longevity.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-10 md:items-center lg:items-start sm:flex-row lg:flex-col">
              <img src={Sleep} className="w-16 h-16" />
              <div>
                <h2 className="mb-6 text-gunmetal font-semibold leading-normal text-hm tracking-[-1.2px]">
                  Adequate sleep
                </h2>
                <p className="font-normal text-bm text-deblue leading-lh150">
                  Sleep enhances mental clarity, emotional stability, and
                  physical wellness, promoting overall restoration and
                  rejuvenation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
