import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import CompanyTitle from "../../Components/CompanyTitle/CompanyTitle";
import CustomCheckboxWithLabel from "../../Components/CustomCheckbox/CustomCheckboxWithLabel";
import "./GenerateOtp.scss";

const GenerateOtp = () => {
  return (
    <div className="container-lg">
      <CompanyTitle />
      <div className="mt-5 row">
        <div className="col-lg-9 col-md-8 col-0"></div>
        <div className="col-lg-3 col-md-4">
          <h2 className="mb-4 login-password__title">Reset Password</h2>
          <div className="mb-3">
            <CustomCheckboxWithLabel label={"Sen to +91XXXXXXXXXX"} small />
          </div>
          <div className="mb-5">
            <CustomCheckboxWithLabel label={"Sen to @email.com"} small />
          </div>
          <div className="mb-5">
            <Button label={"Generate OTP"} />
          </div>

          <p className="mt-4 login-password__text">
            <span>Having Trouble Logging in?</span>
            <span className="mx-2 generate-otp__link-text">Get help</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GenerateOtp;
