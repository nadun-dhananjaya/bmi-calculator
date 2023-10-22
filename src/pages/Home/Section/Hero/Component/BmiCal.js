import React, { useEffect, useRef, useState } from "react";
import RadionButton from "../../../../../assets/Component/RadioButton/RadioButton";
import TextInput from "../../../../../assets/Component/TextInput/NumberOnlynput";
import "./BmiCal.css";

const isEmpty = (value) => {
  return (
    value == null || (typeof value === "string" && value.trim().length === 0)
  );
};

const calBMIInImperial = ({
  heightFt = 0,
  heightIn = 0,
  weightSt = 0,
  weightLbs = 0,
}) => {
  // height in inches
  const heightInInches = heightFt * 12 + heightIn * 1;

  // weight in lbs
  const weightInLbs = weightSt * 14 + weightLbs * 1;

  const bmi = (weightInLbs / (heightInInches * heightInInches)) * 703;
  return bmi;
};

const calBMIInMetric = (heightCm, weightKg) => {
  const heightInMeters = heightCm / 100;
  const bmi = weightKg / (heightInMeters * heightInMeters);
  return bmi;
};

const BmiCal = () => {
  const [selectedUnit, setSelectedUnit] = useState("metric");

  // metric
  const [heightCm, setHeightCm] = useState("");
  const [weightKg, setWeightKg] = useState("");

  // inperial
  const [heightFt, setHeightFt] = useState("");
  const [heightIn, setHeightIn] = useState("");
  const [weightSt, setWeightSt] = useState("");
  const [weightLbs, setWeightLbs] = useState("");

  const [BMI, setBMI] = useState(0);

  const handleHeightCmChange = (event) => {
    setHeightCm(event.target.value);
  };

  const handleHeightFtChange = (event) => {
    setHeightFt(event.target.value);
  };

  const handleHeightInChange = (event) => {
    setHeightIn(event.target.value);
  };

  const handleWeightStChange = (event) => {
    setWeightSt(event.target.value);
  };

  const handleWeightLbChange = (event) => {
    setWeightLbs(event.target.value);
  };

  const handleWeightKgChange = (event) => {
    setWeightKg(event.target.value);
  };

  useEffect(() => {
    if (selectedUnit == "imperial") {
      const bmi = calBMIInImperial({
        heightFt: heightFt,
        heightIn: heightIn,
        weightSt: weightSt,
        weightLbs: weightLbs,
      });
      setBMI(bmi.toFixed(2));
    } else if (selectedUnit == "metric") {
      if (!isEmpty(heightCm) && !isEmpty(weightKg)) {
        const bmi = calBMIInMetric(heightCm, weightKg);
        setBMI(bmi.toFixed(2));
      } else {
        setBMI(0);
      }
    }
  }, [heightCm, weightKg, heightFt, heightIn, weightSt, weightLbs]);
  const handleOptionChange = (event) => {
    setSelectedUnit(event.target.value);
    setHeightCm("");
    setHeightFt("");
    setHeightIn("");
    setWeightKg("");
    setWeightLbs("");
    setWeightSt("");
    setBMI(0);
  };
  return (
    <div className="z-20 flex flex-col w-full max-w-full gap-8 p-8 mt-3 mb-10 bg-white border-0 bmi-card-shadow lg:max-w-xl rounded-2xl lg:mt-0">
      <h2 className="font-semibold leading-normal text-hm">
        Enter your details below
      </h2>
      <div className="grid grid-cols-2">
        <RadionButton
          id={`metric`}
          name={`unit_type`}
          label={`metric`}
          value={`metric`}
          svgFillColor={`#345FF6`}
          svgBorderColor={`#D8E2E7`}
          checked={selectedUnit == "metric" ? true : false}
          onChange={handleOptionChange}
        />
        <RadionButton
          id={`imperial`}
          name={`unit_type`}
          label={`imperial`}
          value={`imperial`}
          svgFillColor={`#345FF6`}
          svgBorderColor={`#D8E2E7`}
          checked={selectedUnit == "imperial" ? true : false}
          onChange={handleOptionChange}
        />
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        {selectedUnit == "metric" ? (
          <>
            <div className="form-group">
              <label className="text-deblue leading-lh150 text-bs">
                Height
              </label>
              <TextInput
                id={"height_cm"}
                label={"cm"}
                value={heightCm}
                onChange={handleHeightCmChange}
                placeholder={`0`}
              />
            </div>
            <div className="form-group">
              <label className="text-deblue leading-lh150 text-bs">
                Weight
              </label>
              <TextInput
                id={"height_kg"}
                label={"kg"}
                value={weightKg}
                onChange={handleWeightKgChange}
                placeholder={`0`}
              />
            </div>
          </>
        ) : (
          <>
            <div className="form-group">
              <label className="text-deblue leading-lh150 text-bs">
                Height
              </label>
              <TextInput
                id={"height_ft"}
                label={"ft"}
                value={heightFt}
                onChange={handleHeightFtChange}
                placeholder={`0`}
              />
            </div>
            <div className="flex items-end form-group">
              <TextInput
                id={"height_in"}
                label={"in"}
                value={heightIn}
                onChange={handleHeightInChange}
                placeholder={`0`}
              />
            </div>
            <div className="form-group">
              <label className="text-deblue leading-lh150 text-bs">
                Weight
              </label>
              <TextInput
                id={"weight_st"}
                label={"st"}
                value={weightSt}
                onChange={handleWeightStChange}
                placeholder={`0`}
              />
            </div>
            <div className="flex items-end form-group">
              <TextInput
                id={"weight_lbs"}
                label={"lbs"}
                value={weightLbs}
                onChange={handleWeightLbChange}
                placeholder={`0`}
              />
            </div>
          </>
        )}
      </div>
      <div className="w-content"></div>
      <div className="w-full bg-blue rounded-l-2xl rounded-r-2xl lg:rounded-r-[99px] ">
        <div className="m-8 overflow-hidden text-white ">
          {BMI > 0 ? (
            <>
              <p className="mb-2 font-semibold text-white text-bm leading-lh150">
                Your BMI is...
              </p>
              <p className="block font-semibold break-all text-hl lg:text-hxl leading-lh110">
                {BMI}
              </p>
            </>
          ) : (
            <>
              <p className="text-hm font-semibold mb-2 leading-[-1.2px]">
                Welcome
              </p>
              <p>
                Enter your height and weight and you’ll see your BMI result here
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BmiCal;
