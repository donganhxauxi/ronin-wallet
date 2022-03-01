import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import upperImg from "../assets/images/UpperImg.png";
import lowerImg from "../assets/images/LowerImg.png";
import background from "../assets/images/bg-1.png";
import { profileActions } from "../store/profileSlice";
import InputField from "../components/Login/InputField";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useHTTP from "../hooks/use-http";
import { AUTH_API } from "../lib/Constants";

const LoginForm = () => {
  const spinner = <FontAwesomeIcon icon={faSpinner} />;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const loginHandler = useCallback(
    (data) => {
      dispatch(profileActions.login({ token: data.idToken }));
      history.push(`/user-profile/${data.email}`);
    },
    [dispatch, history]
  );

  const requestConfig = {
    url: AUTH_API,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: {
      email: username,
      password: password,
      returnSecureToken: false,
    },
  };

  const { isLoading, sendRequest: authenticateUser } = useHTTP(
    requestConfig,
    loginHandler
  );

  return (
    <div className="login">
      <img
        alt="bg"
        src={background}
        className="background"
        style={{
          position: "absolute",
          margin: "-24px 20px 0 20px",
        }}
      />
      <div className="login__logo">
        <img alt="logo" src={lowerImg} className="lower-img" />
        <img alt="logo" src={upperImg} className="upper-img" />
      </div>
      <div className="login__title">
        <h1>Ronin Wallet</h1>
        <p>Your Digital Passport</p>
      </div>
      <div className="login__control">
        <InputField
          label="Enter email"
          type="text"
          onInputChange={setUsername}
        />
        <InputField
          label="Enter password"
          type="password"
          onInputChange={setPassword}
        />
      </div>

      <div className="login__actions">
        {!isLoading && <button onClick={authenticateUser}>Unlock</button>}
        {isLoading && spinner}
      </div>
    </div>
  );
};

export default LoginForm;
