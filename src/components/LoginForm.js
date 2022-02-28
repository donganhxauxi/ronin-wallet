import React, { useState } from "react";
import upperImg from "../assets/images/UpperImg.png";
import lowerImg from "../assets/images/LowerImg.png";
import background from "../assets/images/bg-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const LoginForm = () => {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const [inputType, setInputType] = useState("password");

  const changeInputTypeHandler = () => {
    setInputType((prevState) => {
      return prevState === "password" ? "input" : "password";
    });
  };
  return (
    <div className="login">
      <img
        src={background}
        className="background"
        style={{
          position: "absolute",
          margin: "-24px 20px 0 20px",
        }}
      />
      <div className="login__logo">
        <img src={lowerImg} className="lower-img" />
        <img src={upperImg} className="upper-img" />
      </div>
      <div className="login__title">
        <h1>Ronin Wallet</h1>
        <p>Your Digital Passport</p>
      </div>
      <div className="login__control">
        <label htmlFor="password">Enter password</label>
        <div className="password-wrapper">
          <input id="password" type={inputType} />
          <i onClick={changeInputTypeHandler}>{eye}</i>
        </div>
      </div>
      <div className="login__actions">
        <button>Unlock</button>
      </div>
    </div>
  );
};

export default LoginForm;
