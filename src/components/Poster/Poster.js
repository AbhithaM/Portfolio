import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import sustainable from "./SUSTAINABILITY AND BIOTECH DAY.png";
import artboard1 from "./Copy of Artboard 1.png";
import artboard2 from "./Copy of Artboard 2.png";

function Poster() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Posters </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the posters I've designed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card" style={{ marginBottom: "20px", textAlign: "center" }}>
            <img src={sustainable} alt="Sustainability and Biotech Day" style={{ maxWidth: "100%", maxHeight: "600px", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.2)" }} />
          </Col>
          <Col md={12} className="project-card" style={{ marginBottom: "20px", textAlign: "center" }}>
            <img src={artboard1} alt="Visiting Card - Falcon Cricket Academy" style={{ maxWidth: "100%", maxHeight: "600px", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.2)" }} />
          </Col>
          <Col md={12} className="project-card" style={{ marginBottom: "20px", textAlign: "center" }}>
            <img src={artboard2} alt="Poster - Falcon Cricket Academy" style={{ maxWidth: "100%", maxHeight: "600px", borderRadius: "10px", border: "1px solid rgba(255, 255, 255, 0.2)" }} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Poster;
