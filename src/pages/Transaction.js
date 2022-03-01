import React, { useState } from "react";
import { useSelector } from "react-redux";
import chevronLeft from "../assets/images/chevron-left.png";
import InputField from "../components/Login/InputField";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { Button, Col, Row } from "react-bootstrap";
import { Modal } from "react-bootstrap";

const textStyle = (fontSize, lineHeight, fontWeight) => {
  return {
    fontWeight: fontWeight,
    fontSize,
    lineHeight,
    marginBottom: "24px",
  };
};
const Transaction = () => {
  const history = useHistory();
  const email = useSelector((state) => state.profile.email);
  const params = useParams();
  const [show, setShow] = useState(false);
  const cancelHandler = () => {
    history.goBack();
  };
  const transferHandler = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="transaction">
      <Modal show={show} onHide={handleClose} style={{ marginTop: "131px" }}>
        <Modal.Body style={{ textAlign: "center" }}>
          <Modal.Title>
            <p style={textStyle("20px", "28px", 700)}>Successfully Sent</p>
            <p
              style={textStyle("14px", "20px", 400)}
            >{`Your ${params.transactionType} has been sent! Thank you for using our service`}</p>
          </Modal.Title>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{
              backgroundColor: "#2F80ED",
              margin: "0 20px",
              padding: "10px 138px",
            }}
          >
            OK
          </Button>
        </Modal.Body>
      </Modal>
      <div className="transaction__header">
        <img
          src={chevronLeft}
          onClick={cancelHandler}
          alt="icon"
          style={{ cursor: "pointer" }}
        />
        <p>Send Assets</p>
      </div>
      <div className="login__control" style={{ textAlign: "left" }}>
        <InputField
          label="From"
          type="text"
          disabled={true}
          placeholder={`My Wallet (${email})`}
        />
        <InputField label="To" type="text" />
        <InputField
          label="Assets"
          type="currency"
          className="currency"
          disabled={false}
          placeholder={`${params.transactionType}`}
        />
        <InputField label="Amount" type="text" className="amount" />
      </div>

      <Row style={{ marginTop: "171px" }}>
        <Col xs="6">
          <Button
            style={{
              backgroundColor: "#F7F9FC",
              color: " #1273EA",
              padding: "10px 62px",
              borderRadius: "8px",
              border: "none",
            }}
            onClick={cancelHandler}
          >
            Cancel
          </Button>
        </Col>
        <Col xs="6">
          <Button
            style={{
              backgroundImage:
                "linear-gradient(256.28deg, #1C94F4 0%, #1273EA 100%)",
              backgroundColor: "none",
              padding: "10px 62px",
              borderRadius: "8px",
              border: "none",
            }}
            onClick={transferHandler}
          >
            Send
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Transaction;
