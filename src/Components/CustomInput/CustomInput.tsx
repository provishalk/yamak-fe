import React from "react";
import "./CustomInput.scss";

type CustomInputProps = { placeholder?: string; type?: string; onChange?: any };

const CustomInput = ({ placeholder, type, onChange }: CustomInputProps) => {
  return (
    <input
      className="col-12 custom-input"
      type={type || "text"}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
    />
  );
};

export default CustomInput;
