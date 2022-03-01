import React, { useState, Fragment } from "react";
import depositIcon from "../../assets/images/credit-card-fill.png";
import sendIcon from "../../assets/images/Send.png";
import repeatIcon from "../../assets/images/repeat.png";
import { Row, Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import EurIcon from "../../assets/images/image 7.png";
import YenIcon from "../../assets/images/image 8.png";
import UsdIcon from "../../assets/images/image 9.png";
import { useSelector } from "react-redux";
import {
  useRouteMatch,
  Route,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

const iconList = [
  { icon: depositIcon, action: "Deposit" },
  { icon: sendIcon, action: "Send" },
  { icon: repeatIcon, action: "Swap" },
];
const UserActions = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const match = useRouteMatch();
  const history = useHistory();

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
    <Fragment>
      <Row className="actions">
        {iconList.map((icon, index) => {
          return (
            <Col
              className="actions__logo"
              onClick={icon.action === "Send" ? handleShow : undefined}
              key={index}
            >
              <img src={icon.icon} alt="logo" />
              <p>{icon.action}</p>
            </Col>
          );
        })}
      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ textAlign: "center" }}>
          <Modal.Title>Assets</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currencyList.map((cur, index) => {
            return (
              <Row
                className="assets__currency--sending"
                onClick={(e) => {
                  history.push(`${match.url}/${cur.type}`);
                }}
                key={index}
              >
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
        </Modal.Body>
      </Modal>
      <Route path={`${match.path}/transaction`}></Route>
    </Fragment>
  );
};

export default UserActions;
