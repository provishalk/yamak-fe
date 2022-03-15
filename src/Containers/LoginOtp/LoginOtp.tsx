import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import CompanyTitle from "../../Components/CompanyTitle/CompanyTitle";
import CustomCheckboxWithLabel from "../../Components/CustomCheckbox/CustomCheckboxWithLabel";

const LoginOtp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleChange = (newOtp: any) => {
    setOtp(newOtp);
  };

  const signInUsingPassword = () => {
    navigate("/password");
  };
  return (
    <div className="container-lg">
      <CompanyTitle />
      <div className="mt-5 row">
        <div className="col-lg-9 col-md-8 col-0"></div>
        <div className="col-lg-3 col-md-4">
          <h2 className="mb-4 login-password__title">Enter Password</h2>
          <p className="mb-4">
            Send to +91XXXXXXXXXX
            <u className="mx-2 new-password__link-text">Edit</u>
          </p>
          <div className="mb-4">
            <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={6}
              separator={<span className="new-password__otp-separator"></span>}
              inputStyle={"new-password__otp-input"}
            />
          </div>
          <div className="mb-4">
            <CustomCheckboxWithLabel
              label={"Don't ask for OTP on this device"}
              small
            />
          </div>
          <div className="mb-4">
            <Button label={"Login In"} />
          </div>
          <p className="mt-4 generate-otp__text">
            <span>Didn't get the Code?</span>
            <span className="mx-2 new-password__link-text">
              <u>Resend</u>
            </span>
          </p>
          <div className="mb-4">
            <Button
              label={"Continue Using Password"}
              onClick={signInUsingPassword}
              light
            />
          </div>
          <p className="text-center new-password__link-text">
            <Link to="/">Back to Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginOtp;
