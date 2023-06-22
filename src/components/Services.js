import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Temp from '../assets/img/temp.jpeg';
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';

import TrackVisibility from 'react-on-screen';

export const Services = () => {

  const projects = [
    {
      title: "API PENTEST",
      description: "InterStellar-Security",
      imgUrl: Temp,
    },
    {
      title: "VAPT Services",
      description: "InterStellar-Security",
      imgUrl: Temp,
    },
    {
      title: "Cloud Security PENTEST",
      description: "InterStellar-Security",
      imgUrl: Temp,
    },
    {
      title: "Mobile-App PENTEST ",
      description: "InterStellar-Security",
      imgUrl: Temp,
    },
    {
      title: "Web-App PENTEST",
      description: "InterStellar-Security",
      imgUrl: Temp,
    },
    {
      title: "Tools",
      description: "InterStellar-Security",
      imgUrl: Temp,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Services</h2>
                <p>
                    InterStellar-Security !!!!!!
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">PENTEST</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((Services, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...Services}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                        <p>
                            InterStellar-Security
                        </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Defy Cyber Threats, Embrace Stellar Protection</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}