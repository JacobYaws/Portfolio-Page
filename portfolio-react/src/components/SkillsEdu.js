import React from 'react';
import { Container } from 'react-bootstrap'

const SkillsEdu = () => {
    return(
    <Container id="skills-edu">
        <h3>Skills & Education</h3>
        <Container id="list-items">
          
          <ul id="skills">
            <li>MERN Stack</li>
            <li>Javascript</li>
            <li>MySQL</li>
            <li>HTML5</li>
            <li>CSS</li>
            <li>Linux Systems</li>
            
            </ul>

            <ul id="education">
            {/* <li>Kansas State University <span>Bachelor of Science - Agricultural Technology and Management</span></li> */}
            <li>Kansas State University <span>Agricultural Technology and Management</span></li>
            <li>Full Stack Coding Bootcamp</li>
          </ul>
        </Container>
      </Container>
    )
}

export default SkillsEdu