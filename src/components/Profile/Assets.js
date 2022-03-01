import React from "react";
import { Row, Col } from "react-bootstrap";
import EurIcon from "../../assets/images/image 7.png";
import YenIcon from "../../assets/images/image 8.png";
import UsdIcon from "../../assets/images/image 9.png";
import { useSelector } from "react-redux";
const Assets = () => {
  const assets = useSelector((state) => state.profile.assets);
  const currencyList = [
    { icon: EurIcon, type: "EUR" },
    { icon: YenIcon, type: "YEN" },
    { icon: UsdIcon, type: "USD" },
  ].map((currency) => {
    return {
      icon: currency.icon,
      type: currency.type,
      amount: assets[currency.type],
    };
  });
  return (
    <div className="assets">
      <h1>Assets</h1>
      {currencyList.map((cur, index) => {
        return (
          <Row className="assets__currency" key={index}>
            <Col xs="2" style={{ display: "flex", alignItems: "center" }}>
              <img src={cur.icon} alt={cur.type} />
            </Col>
            <Col xs="10">
              <p>
                {cur.amount} {cur.type}
              </p>
              <p>{`${cur.amount * 23406} VND`}</p>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};

export default Assets;
