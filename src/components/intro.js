import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import myImage from '../myImage.jpg';

function Intro() {
  return (
    <section id="intro">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <Image src={myImage} fluid roundedCircle style={{ width: 200, height: 'auto' }} />
          </Col>
          <Col md={6}>
            <h2>Hi, My name is Fernando</h2>
            <p>As a driven and dedicated Full Stack Web Development student, I am eager to apply my skills and expertise to help businesses achieve their goals. I am currently seeking an opportunity to begin my career as a junior full stack developer or front end developer. I bring a unique blend of experience and knowledge, having a background in Graphic Design and extensive customer and technical support experience working for major companies such as Verizon, DirecTV, Sirius XM, and Altice USA. With over 10 years of experience in customer support and technical support, I have honed my communication and problem-solving skills and understand the importance of delivering quality service.
              <p>
                In addition to my experience, I have completed a rigorous 9-month training program at Kenzie Academy Class of April 2023 where I have gained technical skills and knowledge in full-stack web development. My passion for technology and my commitment to continuous learning make me confident in my ability to take on new challenges and deliver results.</p>
            </p>
            <h2>Skills</h2>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Bootstrap</li>
              <li>Git/ GitHub</li>
              <li>Chrome Dev Tools</li>
              <li>Postman</li>
              <li>Adobe Photoshop</li>
              <li>MS PowerPoint</li>
              <li>Teamwork</li>
            </ul>
            <p>
              <a href="#projects" className="btn btn-primary">View my work</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Intro;