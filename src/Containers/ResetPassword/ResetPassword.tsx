import React, { useState } from "react";
import CompanyTitle from "../../Components/CompanyTitle/CompanyTitle";
import GenerateOtp from "../GenerateOtp/GenerateOtp";
import NewPassword from "../NewPassword/NewPassword";

const ResetPassword = () => {
  const [isEnteringPassword, setIsEnteringPassword] = useState(false);
  return (
    <div className="container-lg">
      <CompanyTitle />
      <div className="mt-5 row">
        <div className="col-lg-9 col-md-8 col-0"></div>
        <div className="col-lg-3 col-md-4">
          <h2 className="mb-4 generate-otp__text">Reset Password</h2>
          <div>
            {isEnteringPassword ? (
              <NewPassword />
            ) : (
              <GenerateOtp setIsEnteringPassword={setIsEnteringPassword} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
