import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ExperienceCard(props) {
  return (
    <Card className="experience-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.timeline}<br/>
          {props.description}
        </Card.Text>
        {props.credentialsLink && (
            <Button variant="primary" href={props.credentialsLink} target="_blank">
            <CgWebsite /> &nbsp;
            {"Credentials"}
            </Button>
        )}
        {"\n"}
        {"\n"}

        {props.programLink && (
            <Button
            variant="primary"
            href={props.programLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
            >
            <CgWebsite /> &nbsp;
            {"About the program"}
            </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ExperienceCard;