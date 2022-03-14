import React, { useState } from "react";
import "./CustomCheckboxWithLabel.scss";
const CustomCheckboxWithLabel = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="custom-checkbox" onClick={() => setChecked(!checked)}>
      <div
        className={`custom-checkbox__box custom-checkbox__box${
          checked ? "__active" : "__default"
        }`}
      />
      <span className="custom-checkbox__text">Teams & Policy</span>
    </div>
  );
};

export default CustomCheckboxWithLabel;
