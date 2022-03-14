import React from "react";
import CompanyTitle from "../../Components/CompanyTitle/CompanyTitle";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import CustomInput from "../../Components/CustomInput/CustomInput";
import ThirdPartyLoginCard from "../../Components/ThirdPartyLoginCard/ThirdPartyLoginCard";
import HorizontalLineWithText from "../../Components/HorizontalLineWithText/HorizontalLineWithText";
import Button from "../../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";

import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  
  const handleGenerateOtp = () => {
    navigate("password");
  };

  return (
    <div className="container-lg">
      <CompanyTitle />
      <div className="mt-5 row">
        <div className="col-lg-9 col-md-8 col-0"></div>
        <div className="col-lg-3 col-md-4">
          <h2 className="mb-5 login__title ">
            Sign in <span className="fs-3 fw-normal">or</span> Sign up
          </h2>
          <ThirdPartyLoginCard Icon={FcGoogle} label="Continue with Google" />
          <ThirdPartyLoginCard
            Icon={BsFacebook}
            label="Continue with Facebook"
            iconStyle="login__facebook-icon"
          />
          <div className="mb-4 mt-4">
            <HorizontalLineWithText label={"or"} />
          </div>
          <CustomInput placeholder="Email/ Mobile Number" />
          <p className="mt-3 login__text">Teams & Policy</p>
          <Button label={"Generate OTP"} onClick={handleGenerateOtp} />
          <p className="mt-4 text-center">
            <span className="sign-up__default-text-color">Need help?</span>
            <span className="mx-2">
              <Link to="signup" className="sign-up__link-text">
                Sign up
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
