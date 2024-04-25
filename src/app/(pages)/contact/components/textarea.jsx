import React, { useEffect, useState } from "react";

const FormTextArea = ({
  name,
  label,
  placeholder,
  value,
  isEmpty,
  className,
}) => {
  const [displayRequired, setDisplayRequired] = useState("hidden");
  const [redBorder, setRedBorder] = useState("border-[#d6d9e6]");

  useEffect(() => {
    if (isEmpty == true) {
      setDisplayRequired("block");
      setRedBorder("border-[#ed3548]");
    }
  }, [isEmpty]);

  return (
    <div className={className}>
      <div className={`flex justify-between items-center `}>
        <label>{label}</label>
        <p
          className={`${displayRequired} font-medium text-[14px] text-[#ed3548]`}
        >
          This field is required
        </p>
      </div>
      <div>
      
        <textarea
          name={name}
          className={`font-medium lg:w-[660px] w-[340px] mt-1 p-2 pl-3 h-[100px] border-gray-300 rounded-lg focus:ring-gray-300 focus:border-0`}
          type="text"
          placeholder={placeholder}
          value={value}
        />
      </div>
    </div>
  );
};

export default FormTextArea;
