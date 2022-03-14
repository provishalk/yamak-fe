import React from "react";
import "./HorizontalLineWithText.scss";

type HorizontalLineWithTextProps = {
  label: string;
};

const HorizontalLineWithText = ({ label }: HorizontalLineWithTextProps) => {
  return <h3 className="horizontal-line-with-text">{label}</h3>;
};

export default HorizontalLineWithText;
