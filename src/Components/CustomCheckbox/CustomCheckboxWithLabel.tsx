import React, { useState } from "react";
import "./CustomCheckboxWithLabel.scss";

type CustomCheckboxWithLabelProps = { small?: boolean; label: string };

const CustomCheckboxWithLabel = ({
  small,
  label,
}: CustomCheckboxWithLabelProps) => {
  const [checked, setChecked] = useState(true);
  return (
    <div className="custom-checkbox" onClick={() => setChecked(!checked)}>
      <div
        className={`custom-checkbox__box custom-checkbox__box${
          checked ? "__active" : "__default"
        } custom-checkbox${small ? "__small" : "__default"}`}
      />
      <span className="custom-checkbox__text">{label}</span>
    </div>
  );
};

export default CustomCheckboxWithLabel;
