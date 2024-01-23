import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard";
import practera from "../../assets/img/experience/practera.png";
import nswgov from "../../assets/img/experience/nswgov.png";
import research from "../../assets/img/experience/research.jpg";
import woolies from "../../assets/img/experience/woolies.png";

export const Experience = () => {
  return (
    <Container fluid className="experience" id="experience">
      <Container>
        <h1>Experience</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={practera}
              title="Industry Project - StudyNSW"
              timeline="Nov 2023 - Dec 2023"
              description="Professional Business Project consulting for an online platform connecting customers with beauty and wellness centers. Conducted market research and analysis to support the company's expansion. Developed comprehensive strategies, including an investor outreach plan and engagement strategy."
              credentialsLink="https://openbadgepassport.com/app/badge/info/659445"
              programLink="https://go.practera.com/nsw-job-connect-program"
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={nswgov}
              title="NSW government Virtual Internship Program Participant"
              description="Conducted a detailed analysis of part-time employment trends in the NSW public sector, focusing on male and female representation, sector-wise distribution, and changes over the past four years using SAP Lumira."
              credentialsLink="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/NSW%20Government%20Virtual%20Program/LEvP9qwXSHsaZDBnB_NSW%20Government%20Virtual%20Program_WLCKXgzEH75RcoSbH_1690600204261_completion_certificate.pdf"
              programLink="https://www.psc.nsw.gov.au/virtual-internship-program"
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={woolies}
              title="Woolworths Industry Interface Project"
              timeline="Jun 2020 - Aug 2020"
              description="Conducted a comprehensive analysis of Woolworths' call recording system, proposing a format for incoming and outgoing call forms using script editor. The report includes a summary of SPSS quantitative analysis on clean data, featuring frequency and crosstab analyses. Identified challenges in the forms and personnel practices at Woolworths Supply Chain, providing recommendations for improvement."
              credentialsLink="https://drive.google.com/drive/u/0/folders/1CbYePwptiPQDIn8O6xTAZE36vzyagYp-"
            />
          </Col>

          <Col md={4} className="experience-card">
            <ExperienceCard
              imgPath={research}
              title="Research Assitant"
              timeline="Feb 2022 - Jan 2023"
              description="Assisted with research-related work in FinTech and Cybersecurity areas using Confluence, including copyright clearance and summarising research articles."             
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}