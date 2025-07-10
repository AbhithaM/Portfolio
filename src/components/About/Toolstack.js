import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPhotoshop,
  DiIllustrator,
} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiCanva,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIllustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      </Row>
  );
}

export default Toolstack;
