import React from 'react';
import { Container, Col, Image } from 'react-bootstrap';

const AboutMeAVI = () => {
    return (
        <Container id="avi-about-me">
      <Col id="avi-col">
        
        <Image id="avi" src="https://placehold.jp/300x300.png" roundedCircle />
      </Col>

        <Col id="about-me">
            <div>
                <h2>Jacob Yaws</h2>
                <h3>About Me</h3>
            </div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </Col>
        </Container>
    )
}

export default AboutMeAVI
