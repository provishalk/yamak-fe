import React from "react";
import "./CustomInput.scss";

type CustomInputProps = { placeholder?: string };

const CustomInput = ({ placeholder }: CustomInputProps) => {
  return <input className="col-12 custom-input" placeholder={placeholder} />;
};

export default CustomInput;
