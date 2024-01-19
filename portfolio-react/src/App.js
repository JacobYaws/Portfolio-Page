import logo from './logo.svg';
import './App.css';
import { Container, Nav, Navbar, Col, Row, Button, Image, Carousel, List } from 'react-bootstrap';
import ProjectResults from './components/ProjectResults';
import AboutMeAVI from './components/AboutMeAVI';
import SkillsEdu from './components/SkillsEdu';


function App() {
  return (
    <div className="App">
      {/* <Navbar>
        <Nav>
          <Nav.Link id="main-link">Home Button</Nav.Link>
          <Nav.Link className="secondary-link">About Me</Nav.Link>
          <Nav.Link className="secondary-link">Work</Nav.Link>
          <Nav.Link className="secondary-link">Contact</Nav.Link>
        </Nav>
      </Navbar> */}
      <Container className="main-container">
        <AboutMeAVI />
        <ProjectResults />
        <SkillsEdu />

      <Container>
        <h3 >Contact</h3>
        <Container>
          Contact Info
        </Container>
      </Container>
      </Container>
      
    </div>
  );
}

export default App;
