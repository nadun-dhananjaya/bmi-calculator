import React, { useEffect, useRef } from "react";
import InputMask from "inputmask";

const NumberOnlyInput = ({ id, label, value, onChange, placeholder }) => {
  const inputRef = useRef("");

  useEffect(() => {
    InputMask({
      alias: "numeric",
      prefix: "",
      radixPoint: ".",
      rightAlign: false,
    }).mask(inputRef.current);
  }, []);
  return (
    <>
      <div className="rounded-xl border-2  border-bcolor py-5 px-6 mt-2 h-[69px] flex items-center">
        <input
          ref={inputRef}
          id={id}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-9/12 font-semibold outline-none text-hm leading-lh110 "
        />
        <div className="inline-block w-3/12 text-end text-blue">
          <label className="m-0 font-semibold text-hm leading-lh110 ">
            {label}
          </label>
        </div>
      </div>
    </>
  );
};

export default NumberOnlyInput;
