import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiTableau,
  SiMicrosoftexcel,
  SiGooglecolab,
  SiPowerbi,
  SiEclipseide,
  SiIntellijidea,
  SiGithub,
  SiApachetomcat
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide color="#3385ff"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode color="#3385ff"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea color="orange"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman color="#ff6600"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau color="#3385ff"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi color="#ffcc00"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab color="#ffcc00"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub color="#fff"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachetomcat fill="orange"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
