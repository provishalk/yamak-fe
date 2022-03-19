import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import CompanyTitle from "../../Components/CompanyTitle/CompanyTitle";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import CustomInput from "../../Components/CustomInput/CustomInput";
import ThirdPartyLoginCard from "../../Components/ThirdPartyLoginCard/ThirdPartyLoginCard";
import HorizontalLineWithText from "../../Components/HorizontalLineWithText/HorizontalLineWithText";
import Button from "../../Components/Button/Button";
import CustomCheckbox from "../../Components/CustomCheckbox/CustomCheckboxWithLabel";
import "./Registration.scss";
import axios from "axios";
import { errorNotification, successNotification } from "../../utils/functions";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = () => {
    if (password === rePassword) {
      const bodyData = { firstName, lastName, contact, password };
      axios
        .post("http://localhost:3001/register", bodyData)
        .then((response) => {
          successNotification("Account created successfully");
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      errorNotification("Password Not matching");
    }
  };

  return (
    <div className="container-lg">
      <CompanyTitle />
      <div className="mt-5 row">
        <div className="col-lg-9 col-md-8 col-0"></div>
        <div className="col-lg-3 col-md-4">
          <h2 className="mb-4 sign-up__heading">Create An Account</h2>
          <div className="sign-up__third-party-login-container">
            <ThirdPartyLoginCard Icon={FcGoogle} label="Continue with Google" />
            <ThirdPartyLoginCard
              Icon={BsFacebook}
              label="Continue with Facebook"
              iconStyle="sign-up__facebook-icon"
            />
            <div className="mb-4 mt-4">
              <HorizontalLineWithText label={"or"} />
            </div>
          </div>
          <div className="row">
            <div className="col-6 mb-3">
              <CustomInput
                placeholder="First Name"
                onChange={(e: any) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="col-6 mb-3">
              <CustomInput
                placeholder="Last Name"
                onChange={(e: any) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <div className="col-12 mb-3">
              <CustomInput
                placeholder="Email/ Mobile Number"
                onChange={(e: any) => {
                  setContact(e.target.value);
                }}
              />
            </div>
            <div className="col-12 mb-3">
              <CustomInput
                placeholder="Password"
                onChange={(e: any) => {
                  setPassword(e.target.value);
                }}
                type="password"
              />
            </div>
            <p className="mb-4 sign-up__password-rule-text sign-up__default-text-color">
              It contains at least 6-15 characters and one uppercase. lowercase,
              special characters and number.
            </p>
            <div className="col-12 mb-3">
              <CustomInput
                placeholder="Re-enter Password"
                onChange={(e: any) => {
                  setRePassword(e.target.value);
                }}
                type="password"
              />
            </div>
          </div>
          <div className="mb-4">
            <CustomCheckbox label={"Teams & Policy"} />
          </div>
          <Button label={"Create An Account"} onClick={handleRegistration} />
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
