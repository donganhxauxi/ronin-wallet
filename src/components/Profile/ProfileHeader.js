import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ProfileHeader = () => {
  const circle = <FontAwesomeIcon icon={faCircle} />;
  const user = <FontAwesomeIcon icon={faUser} />;
  return (
    <Fragment>
      <Row>
        <Col>
          <div className="profile__description">
            <i>{circle}</i>
            <p>Ronin wallet</p>
          </div>
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row-reverse",
          }}
        >
          <i
            style={{
              color: "#1273EA",
              backgroundColor: "#F7F9FC",
              padding: "7px 7px 7px 9px",
              borderRadius: "8px",
            }}
          >
            {user}
          </i>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ProfileHeader;
