import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.demoLink && (
          <Button
            className="stock-demo"
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        { props.frontEnd && props.gh && <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
         Frontend
        </Button> }
        {props.gh && !props.frontEnd &&
        (<Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
         Github
        </Button>)}

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}


        {props.ghLink2 && (
          <Button variant="primary" href={props.ghLink2} target="_blank">
          <BsGithub /> &nbsp;
         Backend
        </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
