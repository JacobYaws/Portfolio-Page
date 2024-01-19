import React from 'react';
import { Container, Col, Image } from 'react-bootstrap';

const AboutMeAVI = () => {
    return (
        <Container id="avi-about-me">
      <Col id="avi-col">
        
        <Image id="avi" src={require("../assets/profile/IMG_2545.jpg")} />
      </Col>

        <Col id="about-me">
            <div>
                <h2>Jacob Yaws</h2>
                <h3>About Me</h3>
            </div>
        <div>My name is Jacob Yaws and I am looking to start a career in web development. 
            I formerly worked as a team lead in transportation and a test technician for an autonomous yard truck company. 
            I am eager to start applying my skills and learning new ones in the tech industry.</div>
        </Col>
        </Container>
    )
}

export default AboutMeAVI
