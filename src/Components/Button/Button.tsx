import React from "react";
import "./Button.scss";

type ButtonProps = { label: string };

const Button = ({ label }: ButtonProps) => {
  return <button className="col-12 button">{label}</button>;
};

export default Button;
