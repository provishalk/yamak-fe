import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import CompanyTitle from "../../Components/CompanyTitle/CompanyTitle";
import CustomInput from "../../Components/CustomInput/CustomInput";

const LoginPassword = () => {
  return (
    <div className="container-lg">
      <CompanyTitle />
      <div className="mt-5 row">
        <div className="col-lg-9 col-md-8 col-0"></div>
        <div className="col-lg-3 col-md-4">
          <h2 className="mb-5 login__title ">Enter Password</h2>
          <p className="text-end mb-0">
            <Link to="/forget-password" className="sign-up__link-text">
              Forget Password?
            </Link>
          </p>
          <CustomInput />
          <p className="mb-3">Don't ask for Password on this device</p>
          <div className="mb-5">
            <Button label={"Sign in"} />
          </div>
          <div className="mb-4">
            <Button label={"Get an OTP on your mobile"} light />
          </div>
          <p className="mt-4 text-center">
            <span className="sign-up__default-text-color">
              Having Trouble Logging in?
            </span>
            <span className="mx-2 sign-up__link-text">Get help</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPassword;
