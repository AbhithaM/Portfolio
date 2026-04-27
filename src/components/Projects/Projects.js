import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sustainable from "../../components/Poster/SUSTAINABILITY AND BIOTECH DAY.png";
import artboard1 from "../../components/Poster/Copy of Artboard 1.png";
import artboard2 from "../../components/Poster/Copy of Artboard 2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sustainable}
              isBlog={false}
              title="Sustainability and Biotech Day"
              description="A vibrant poster designed for Sustainability and Biotech Day, highlighting eco-friendly initiatives and innovation."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={artboard1}
              isBlog={false}
              title="Visiting Card - Falcon Cricket Academy"
              description="Designed a professional visiting card for Falcon Cricket Academy using Adobe Illustrator. Developed a layout that reflected the academy's brand identity."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={artboard2}
              isBlog={false}
              title="Poster - Falcon Cricket Academy"
              description="Created an advertisement poster for Falcon Cricket Academy to promote its services. Utilized Adobe Illustrator to design with a strong visual appeal."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
