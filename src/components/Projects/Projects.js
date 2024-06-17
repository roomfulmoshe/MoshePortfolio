import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Competition from "../../Assets/Projects/business_comp.jpg";
import marekt_watch from "../../Assets/Projects/market_watch.jpg";
import chatify from "../../Assets/Projects/chatify.png";
import market_simulator from "../../Assets//Projects/stock_trading.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              frontEnd = {true}
              title="Chatify"
              description="Chat App or Workspace to share resources and hangout with friends build with react.js, Stream API, and Node.js. Has features which allows user for realtime messaging, file sharing as well as supports reactions on messages."
              gh = {true}
              ghLink="https://github.com/roomfulmoshe/Front-End-React-Chatting-App.git"
              ghLink2 = "https://github.com/roomfulmoshe/Back-End-Node-Chatting-App.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={market_simulator}
              isBlog={false}
              title="Stock Market Simulator"
              description="Users can experience real time trading and charts without monetary risk. Watch your $1,000,000 Portfolio grow, and learn invaluable skills. Created using HTML, CSS, JavaScript, Firebase, and Alpha Vantage API."
              ghLink="https://github.com/roomfulmoshe/paper_trading_project.git"
              gh = {true}
              //TO-DO: If I can get this demo up and running again. I'll be extremely happy
              //demoLink="somelink.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marekt_watch}
              isBlog={false}
              title="Market Watch"
              description="A Python-based script designed to provide a daily briefing of all relevant financial news and market-moving events. The system leverages the following technologies: Selenium for chromedriver integration, pandas and scrapy for web scraping, NLP for news filtering, and automated SMTP delivery for predetermined email delivery (9:30 AM)"
              gh = {false}
              //TO-D0:
              // ghLink=""
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Competition}
              isBlog={false}
              title="Blackstone Launchpaid Business Competition Winner"
              description="Won $1,600 with a four-member team on a Fintech startup idea, a platform which empowers naive investors. Spearheaded UX design and led ideation sessions to develop core features, including an accessible algorithmic trading platform, aimed at democratizing investment opportunities for novice investors."
              gh = {false}
              // ghLink="https://github.com/"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
