import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

const InputField = (props) => {
  const eye = <FontAwesomeIcon icon={faEye} />;
  const layer = <FontAwesomeIcon icon={faLayerGroup} />;

  const match = useRouteMatch();
  const [value, setValue] = useState("");

  const amount = useSelector(
    (state) => state.profile.assets[match.params.transactionType]
  );

  const [inputType, setInputType] = useState(props.type);
  const maxAmountHandler = () => {
    setValue(amount);
  };
  const inputChangeHandler = (e) => {
    if (props.onInputChange) {
      props.onInputChange(e.target.value);
    }
    setValue(e.target.value);
  };

  const changeInputTypeHandler = () => {
    setInputType((prevState) => {
      return prevState === props.type ? "text" : props.type;
    });
  };
  return (
    <Fragment>
      <label
        htmlFor={props.label}
        style={
          props.label === "Amount"
            ? { display: "flex", justifyContent: "space-between" }
            : {}
        }
      >
        <p style={{ textAlign: "left" }}>{props.label}</p>
        {props.label === "Amount" && (
          <p>
            AVAILABLE: {amount} {match.params.transactionType}
          </p>
        )}
      </label>
      <div className="password-wrapper">
        <input
          id={props.label}
          type={inputType}
          onChange={inputChangeHandler}
          disabled={props.disabled}
          style={{ backgroundColor: props.disabled ? "#EDF1F7" : "#FFF" }}
          placeholder={props.placeholder}
          className={`${props.className}--${match.params.transactionType}`}
          value={value}
        />
        {props.label === "Amount" && <span onClick={maxAmountHandler}></span>}
        {props.type === "currency" && <i>{layer}</i>}
        {props.type === "password" && (
          <i onClick={changeInputTypeHandler}>{eye}</i>
        )}
      </div>
    </Fragment>
  );
};

export default InputField;
