import React, { useState } from "react";

const RadionButton = ({
  id,
  name,
  value,
  checked,
  onChange,
  label,
  svgFillColor,
  svgBorderColor,
}) => {
  return (
    <>
      <div className="flex items-center form-group">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          hidden
        />
        <label htmlFor={id} className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
          >
            {checked == true ? (
              <>
                <circle
                  cx="15.5"
                  cy="15.5"
                  r="15.5"
                  fill={`${svgFillColor}`}
                  fillOpacity="0.15"
                />
                <circle cx="15.5" cy="15.5" r="7.5" fill={`${svgFillColor}`} />
              </>
            ) : (
              <circle
                cx="15.5"
                cy="15.5"
                r="15"
                fill="white"
                stroke={`${svgBorderColor}`}
              />
            )}
          </svg>
        </label>
        <label
          htmlFor={id}
          className="font-semibold leading-lh150 text-bm text-gunmetal"
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default RadionButton;
