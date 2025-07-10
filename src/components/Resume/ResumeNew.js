import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImage from "./PAGALAVAN-K-S-FlowCV-Resume-20250710_page-0001.jpg"; // Make sure this path is correct

function ResumeNew() {
  return (
    <div>
      
      <Container fluid className="resume-section">
        {/* Image Section */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={3} sm={4} xs={6} className="text-center">
            <img 
              src={profileImage} // Add your image path here
              alt="Profile" 
              className="profile-image" 
              style={{ width: "100%", height: "auto", objectFit: "contain" }} 
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;