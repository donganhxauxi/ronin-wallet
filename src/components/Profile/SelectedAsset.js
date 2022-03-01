import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import image from "../../assets/images/copy.png";
import logo from "../../assets/images/Subtract.png";
import { useSelector } from "react-redux";
const SelectedAsset = () => {
  const email = useSelector((state) => state.profile.email);
  const assets = useSelector((state) => state.profile.assets);
  return (
    <Fragment>
      <div className="blue-card">
        <div className="blue-card__header">
          <p>
            My wallet
            <span style={{ marginLeft: "8px" }}>{email}</span>
          </p>
          <img src={image} alt="blue-card-logo" />
        </div>

        <hr />

        <div className="blue-card__body">
          <Row>
            <Col xs={8}>
              <p>{assets.USD}</p>
              <p>{`${assets.USD * 23046} VND`}</p>
            </Col>
            <Col xs={4} className="flex">
              <img
                src={logo}
                style={{ marginRight: "6px" }}
                alt="blue-card-logo"
              />
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
};

export default SelectedAsset;
