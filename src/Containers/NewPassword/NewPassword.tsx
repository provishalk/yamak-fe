import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import OtpInput from "react-otp-input";
import CustomInput from "../../Components/CustomInput/CustomInput";
import "./NewPassword.scss";
import { Link } from "react-router-dom";

const NewPassword = () => {
  const [otp, setOtp] = useState("");
  const handleChange = (newOtp: any) => {
    setOtp(newOtp);
  };
  return (
    <div>
      <p>Please enter OTP to reset password</p>
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
      <p className="mb-4">
        Didn't get the Code?
        <u className="mx-2 new-password__link-text">Resend</u>
      </p>
      <div className="mb-4">
        <CustomInput placeholder="New Password" type="password"/>
      </div>
      <div className="mb-4">
        <CustomInput placeholder="Re-enter New Password" type="password"/>
      </div>
      <div className="mb-5">
        <Button label={"Confirm Changes"} />
      </div>
      <p className="mt-4 generate-otp__text">
        <span>Having Trouble Logging in?</span>
        <span className="mx-2 new-password__link-text">Get help</span>
      </p>
      <p className="text-center new-password__link-text">
        <Link to="/">Back to Sign in</Link>
      </p>
    </div>
  );
};

export default NewPassword;
