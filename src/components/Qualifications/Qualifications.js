import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CertificateCard } from "./CertificateCard";
import qualImg1 from "../../assets/img/qualifications/fed.jpg";
import qualImg2 from "../../assets/img/qualifications/spjain.webp";
import qualImg3 from "../../assets/img/qualifications/lqd.png";
import qualImg4 from "../../assets/img/qualifications/aws.png";
import qualImg5 from "../../assets/img/qualifications/hackerranksql.png";
import qualImg6 from "../../assets/img/qualifications/DMpandas.png";
import 'animate.css';
import "../../App.css";
import TrackVisibility from 'react-on-screen';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { ReactComponent as SchoolIcon } from "../../assets/img/qualifications/school.svg";
import "react-vertical-timeline-component/style.min.css";

export const Qualifications = () => {

  const education = [
    {
      title: "Federation University",
      date: "2022-current",
      course: "Master of Data Science",
      description: "Coursework includes Artificial Intelligence and Machine Learning, Business Intelligence and Data Warehousing, Regression and Multivariate Data Analysis, Real Time Analytics, Advanced Data Science Project.",
      gpa: "GPA: 6.778/7",
      imgUrl: qualImg1,
      courseUrl: "https://study.federation.edu.au/course/DCX9",
    },
    {
      title: "SP Jain School of Global Management",
      date: "2019-2022",
      course: "Bachelor of Data Science",
      description: "Coursework includes Introduction to Data Science, Statistical Data Analysis, Advanced Calculus, Linear Algebra, Algorithms and Data Structures, Machine Learning, Object Relational and NoSQL Databases, Simulation Modelling, Big Data Processing Techniques and Platforms.",
      gpa: "GPA: 3.58/4.3",
      imgUrl: qualImg2,
      courseUrl: "https://www.spjain.edu.au/programs/undergraduate/bachelor-of-data-science",
    },
  ];

  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      date: "2022",
      imgUrl: qualImg4,
      certUrl: "https://credly.com/badges/9452088b-9e38-440b-a582-b082a32bfad8",
    },
    {
      title: "Hackerrank SQL (Intermediate) Certificate",
      date: "2022",
      imgUrl: qualImg5,
      certUrl: "https://www.hackerrank.com/certificates/c942c247f43c",
    },
    {
      title: "DataCamp Data Manipulation with pandas",
      date: "2022",
      imgUrl: qualImg6,
      certUrl: "https://www.datacamp.com/statement-of-accomplishment/course/f277306790edf6ee366ffb1e382a6ac8d91e4d85?share=true",
    },
  ]

return (
  <div>
    <section className="qualifications" id="qualifications">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
              <h2>Qualifications</h2>
              <Tab.Container id="qualifications-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Education</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Certificates</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <VerticalTimeline>
                            {education.map((edu, index) => (
                              <VerticalTimelineElement
                                key={index}
                                date={edu.date}
                                iconStyle={{ background: "#904eaa" }}
                                icon={<SchoolIcon />}
                              >
                                <h3 className="vertical-timeline-element-title">{edu.title}</h3>
                                <h5 className="vertical-timeline-element-subtitle">{edu.course}</h5>
                                <p>{edu.gpa}</p>
                                <p id="description">{edu.description}</p>
                                <button className="schoolButton" onClick={() => window.open(edu.courseUrl, "_blank")}>View course</button>
                              </VerticalTimelineElement>
                            ))}
                      </VerticalTimeline>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                  <Row>
                      {
                        certificates.map((certificates, index) => {
                          return (
                            <CertificateCard
                              key={index}
                              {...certificates}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
  </div>
)
}