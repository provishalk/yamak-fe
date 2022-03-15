import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import CompanyTitle from "../../Components/CompanyTitle/CompanyTitle";
import CustomCheckboxWithLabel from "../../Components/CustomCheckbox/CustomCheckboxWithLabel";
import CustomInput from "../../Components/CustomInput/CustomInput";
import "./LoginPassword.scss";

const LoginPassword = () => {
  const navigate = useNavigate();

  const handleGenerateOtp = () => {
    navigate("/otp");
  };
  return (
    <div className="container-lg">
      <CompanyTitle />
      <div className="mt-5 row">
        <div className="col-lg-9 col-md-8 col-0"></div>
        <div className="col-lg-3 col-md-4">
          <h2 className="mb-5 login-password__title">Enter Password</h2>
          <p className="text-end mb-0">
            <Link to="/forget-password" className="login-password__link-text">
              Forget Password?
            </Link>
          </p>
          <CustomInput type="password" />
          <div className="mb-4">
            <CustomCheckboxWithLabel
              label={"Don't ask for Password on this device"}
              small
            />
          </div>

          <div className="mb-5">
            <Button label={"Sign in"} />
          </div>
          <div className="mb-4">
            <Button
              label={"Get an OTP on your mobile"}
              light
              onClick={handleGenerateOtp}
            />
          </div>
          <p className="mt-4 text-center login-password__text">
            <span>Having Trouble Logging in?</span>
            <span className="mx-2 login-password__link-text">Get help</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPassword;
