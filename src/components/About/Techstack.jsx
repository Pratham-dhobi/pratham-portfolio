import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlineLineChart } from "react-icons/ai";
import {
  DiJavascript1,
  DiJava,
} from "react-icons/di";
import { BiCube } from "react-icons/bi";
import {
  SiSpring,
  SiNumpy,
  SiPandas,
  SiSpringboot,
  SiHibernate,
  SiApachemaven,
  SiSpringsecurity,
  SiOracle,
  SiReact,
  SiMysql,
  SiMongodb,
  SiPython,
  SiGit,
  SiBootstrap,
} from "react-icons/si";

function Techstack() {

  const size = 40;
  
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava color="orange" size={90}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring color="#00b300"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot color="#00b300"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringsecurity color="#00b300"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div style={{ display: "grid", alignItems: "center", justifyContent: "center"}}>
          {/* Row 1 */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "10px"}}>
            <BiCube size={size} style={{marginRight: "-13px", color: "#00cccc"}}/>
            <BiCube size={size} style={{marginRight: "-13px", color: "#00cccc"}}/>
            <BiCube size={size} style={{color: "#00cccc"}}/>
          </div>
          {/* Row 2 */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "-13px"}}>
            <BiCube size={size} style={{marginRight: "-13px", color: "#00cccc"}}/>
            <BiCube size={size} style={{marginRight: "-13px", color: "#00cccc"}}/>
            <BiCube size={size} style={{marginRight: "-13px", color: "#00cccc"}}/>
            <BiCube size={size} style={{color: "#00cccc"}}/>
          </div>
          {/* Row 3 */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "-13px" }}>
            <BiCube size={size} style={{marginRight: "-13px", color: "#00cccc"}}/>
            <BiCube size={size} style={{marginRight: "-13px", color: "#00cccc"}}/>
            <BiCube size={size} style={{color: "#00cccc"}}/>
          </div>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHibernate color="gray"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons d-flex align-items-center justify-content-center">
        <SiApachemaven color="#00cccc"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact color="#3385ff"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql color="orange" size={90}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb color="#00b300"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle color="red"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 color="yellow"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap color="#3385ff"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython color="#ffff66"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy color="#3385ff"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas color="#990099"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineLineChart color="#3385ff"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit color="red"/>
      </Col>
    </Row>
  );
}

export default Techstack;
