import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Human! I am <span className="purple">Moshe Shtaygrud </span> 
             from <span className="purple"> Suffern, NY.</span>
            <br />
            I am currently open to work.
            <br />
            I have completed my  <span className="purple">Bachelor's Degree </span> in <span className="purple"> Computer Science </span> from CUNY Queens College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing chess, check out my <a href="https://www.chess.com/stats/overview/mosheking12?" target= "_blank" rel="noreferrer">  <span className="purple"> stats </span></a>
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about futuristic tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Camping & Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness & Sports
            </li>


          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Technology is best when it brings people together."{" "}
          </p>
          <footer className="blockquote-footer">Moshe</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
