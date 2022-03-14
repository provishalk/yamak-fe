import React from "react";
import "./Button.scss";

type ButtonProps = { label: string; light?: boolean; onClick: any };

const Button = ({ label, light, onClick }: ButtonProps) => {
  return (
    <button
      className={`col-12 button__${light ? "light" : "default"}`}
      onClick={(e) => onClick(e)}
    >
      {label}
    </button>
  );
};

Button.defaultProps = { onClick: () => {} };

export default Button;
