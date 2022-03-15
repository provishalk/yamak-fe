import React from "react";
import Button from "../../Components/Button/Button";import CustomCheckboxWithLabel from "../../Components/CustomCheckbox/CustomCheckboxWithLabel";
import "./GenerateOtp.scss";
type GenerateOtpProps = { setIsEnteringPassword?: any };
const GenerateOtp = ({ setIsEnteringPassword }: GenerateOtpProps) => {
  return (
    <div>
      <div className="mb-3">
        <CustomCheckboxWithLabel label={"Sen to +91XXXXXXXXXX"} small />
      </div>
      <div className="mb-5">
        <CustomCheckboxWithLabel label={"Sen to @email.com"} small />
      </div>
      <div className="mb-5">
        <Button
          label={"Generate OTP"}
          onClick={() => {
            setIsEnteringPassword(true);
          }}
        />
      </div>

      <p className="mt-4 generate-otp__text">
        <span>Having Trouble Logging in?</span>
        <span className="mx-2 generate-otp__link-text">Get help</span>
      </p>
    </div>
  );
};

export default GenerateOtp;
