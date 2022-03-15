import React from "react";
import "./CustomInput.scss";

type CustomInputProps = { placeholder?: string; type?: string };

const CustomInput = ({ placeholder, type }: CustomInputProps) => {
  return (
    <input
      className="col-12 custom-input"
      type={type || "text"}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
