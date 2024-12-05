import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import profileImage from "../../assets/pratham.jpg";
import { Flipped } from "react-flip-toolkit";
import { AiFillGithub, AiOutlineX, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const [flipped, setFlipped] = useState(false);

  const handleMouseEnter = () => setFlipped(true);
  const handleMouseLeave = () => setFlipped(false);

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Pratham Dhobi, and I’m a 4th-year Information Technology student at Gujarat Technological University with a passion for <b className="purple">coding</b> and <b className="purple">software development.</b>
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Python and Javascript. </b>
              </i>
              <br />
              <br />
              I’m particularly interested in &nbsp;
              <i>
                <b className="purple">web development </b>
              </i>{" "}
              &nbsp;and enjoy learning about tools and technologies like
              <i>
                {" "}
                <b className="purple">React js, Spring Boot, REST APIs, microservices</b> and databases such as<b className="purple"> MySQL and MongoDB.</b>
              </i>
              <br />
              <br />
              I’m dedicated to growing my skills and building a strong foundation in <b className="purple">web development</b> and <b className="purple">software development.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div
              className="image-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Flipped flipId="flip-image">
                <div className={`flip-card ${flipped ? "flipped" : ""}`}>
                  <div className="flip-card-front">
                    <img src={profileImage} alt="Front" />
                  </div>
                  <div className="flip-card-back">
                    <img src={myImg} alt="Avatar" />
                  </div>
                </div>
              </Flipped>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Pratham-dhobi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/PrathamDhobi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineX />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pratham-dhobi-75680b222/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/i.m.pratham_29/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
