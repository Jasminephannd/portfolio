import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiMysql,
} from "react-icons/di";
import {
  SiRstudio,
  SiMicrosoftexcel,
  SiTableau,
  SiPowerbi,
  SiSap,
  SiAmazondynamodb,
  SiNeo4J,
} from "react-icons/si";

export const Skills = () => {
  return (
    <Container fluid className="skills" id="skills">
        <h2>Skills</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiRstudio />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiMicrosoftexcel />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAmazondynamodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiNeo4J />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiTableau />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiPowerbi />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiSap />
        </Col>
        </Row>
    </Container>
  );
}