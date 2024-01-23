import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import shoppingbot from "../../assets/img/projects/shopping-bot.png";
import optimisation from "../../assets/img/projects/optimisation.jpg";
import bestroute from "../../assets/img/projects/bestroute.png";
import creditscore from "../../assets/img/projects/creditscore.jpg";
import sentimentanalysis from "../../assets/img/projects/sentimentanalysis.jpg";
import timeseries from "../../assets/img/projects/timeseries.png";


export const Projects = () => {
  return (
    <Container fluid className="project" id="project">
      <Container>
        <h1>My projects</h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppingbot}
              title="Shopping Bot"
              description="Effortlessly compare item prices at two major Australian supermarkets using the Python shopping bot. Powered by Selenium, this script provides real-time insights for smarter and budget-friendly shopping decisions."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={optimisation}
              title="Business Optimisation Plan"
              description="Elevate retail strategy with R-powered optimizer for an international fashion and lifestyle brand. Unleash the potential of a focused 4P marketing approach, backed by consumer insights and sales analytics. Make informed investment decisions, aligning with product portfolios and customer demographics, driven by a detailed analysis of historical performance."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bestroute}
              title="Route Recommendation"
              description="Revolutionizing Santa's gift delivery strategy! Utilizing Neo4j and MongoDB, we've digitized the holiday magic, optimizing routes across six countries based on cost, duration, and gift count. Santa's sleigh just got an upgrade! 🎁🌐✨"
              ghLink=""
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={creditscore}
              title="Precision Credit Scoring Ensemble"
              description="Transform credit accessibility with the predictive model using SVM, XG Boost, and Decision Tree algorithms. Achieve high accuracy and reliability through advanced feature engineering and Soft Voting Ensemble using Python. Navigate financial risks confidently, predicting distress with 10% marginal error."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentimentanalysis}
              title="Social Sentiment Analysis"
              description="Uncover the effect of controversial marketing on celebrity image branding using 'Natural Launguage Processing'. Explore public opinions and engagement levels from Twitter."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={timeseries}
              title="Time Series Analysis"
              description="Forecast future trends in Fiji's tourism using time series analysis with Seasonal Naive Method and ARIMA models.  Valuable data-driven insights for strategic decision-making in the tourism industry."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}