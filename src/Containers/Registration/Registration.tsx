import React from "react";
import { Link } from "react-router-dom";
import CompanyTitle from "../../Components/CompanyTitle/CompanyTitle";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import CustomInput from "../../Components/CustomInput/CustomInput";
import ThirdPartyLoginCard from "../../Components/ThirdPartyLoginCard/ThirdPartyLoginCard";
import HorizontalLineWithText from "../../Components/HorizontalLineWithText/HorizontalLineWithText";
import Button from "../../Components/Button/Button";
import CustomCheckbox from "../../Components/CustomCheckbox/CustomCheckboxWithLabel";
import "./Registration.scss";

const Registration = () => {
  return (
    <div className="container-lg">
      <CompanyTitle />
      <div className="mt-5 row">
        <div className="col-lg-9 col-md-8 col-0"></div>
        <div className="col-lg-3 col-md-4">
          <h2 className="mb-5 sign-up__heading">Create An Account</h2>
          <ThirdPartyLoginCard Icon={FcGoogle} label="Continue with Google" />
          <ThirdPartyLoginCard
            Icon={BsFacebook}
            label="Continue with Facebook"
            iconStyle="sign-up__facebook-icon"
          />
          <div className="mb-4 mt-4">
            <HorizontalLineWithText label={"or"} />
          </div>
          <div className="row">
            <div className="col-6 mb-3">
              <CustomInput placeholder="First Name" />
            </div>
            <div className="col-6 mb-3">
              <CustomInput placeholder="Last Name" />
            </div>
            <div className="col-12 mb-3">
              <CustomInput placeholder="Email/ Mobile Number" />
            </div>
            <div className="col-12 mb-3">
              <CustomInput placeholder="Password" />
            </div>
            <p className="mb-4 sign-up__password-rule-text sign-up__default-text-color">
              It contains at least 6-15 characters and one uppercase. lowercase,
              special characters and number.
            </p>
            <div className="col-12 mb-3">
              <CustomInput placeholder="Re-enter Password" />
            </div>
          </div>
          <div className="mb-4">
            <CustomCheckbox />
          </div>
          <Button label={"Create An Account"} />
          <p className="mt-4 text-center">
            <span className="sign-up__default-text-color">
              Already have an account?
            </span>
            <span className="mx-2">
              <Link to="/" className="sign-up__link-text">
                Login in
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
