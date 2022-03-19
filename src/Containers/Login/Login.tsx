import React, { useState } from "react";
import CompanyTitle from "../../Components/CompanyTitle/CompanyTitle";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import CustomInput from "../../Components/CustomInput/CustomInput";
import ThirdPartyLoginCard from "../../Components/ThirdPartyLoginCard/ThirdPartyLoginCard";
import HorizontalLineWithText from "../../Components/HorizontalLineWithText/HorizontalLineWithText";
import Button from "../../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { errorNotification, successNotification } from "../../utils/functions";
import axios from "axios";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState("");

  const handleSignIn = () => {
    const phoneNo = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (userInput.match(phoneNo)) {
      axios
        .post("http://localhost:3001/generate-otp", { phone: "9687383966" })
        .then((response) => {
          successNotification(response.data?.otp);
          navigate(`otp/${userInput}`);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      const emailId =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (userInput.match(emailId)) {
        navigate(`password/${userInput}`);
      } else {
        errorNotification("Invalid input");
      }
    }
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
          <CustomInput
            placeholder="Email/ Mobile Number"
            onChange={(e: any) => setUserInput(e.target.value)}
          />
          <p className="mt-3 login__text">Teams & Policy</p>
          <Button label={"Sign In"} onClick={handleSignIn} />
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
