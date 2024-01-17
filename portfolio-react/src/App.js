import logo from './logo.svg';
import './App.css';
import { Container, Nav, Navbar, Col, Row, Button, Image, Carousel } from 'react-bootstrap';
import ProjectResults from './components/ProjectResults';


function App() {
  return (
    <div className="App">
      <Navbar>
        <Nav>
          <Nav.Link id="main-link">Home Button</Nav.Link>
          <Nav.Link className="secondary-link">About Me</Nav.Link>
          <Nav.Link className="secondary-link">Work</Nav.Link>
          <Nav.Link className="secondary-link">Contact</Nav.Link>
        </Nav>
      </Navbar>
      <Container className="main-container">

      <Container id="avi-about-me">
      <Col id="avi-col">
        
        <Image id="avi" src="https://placehold.jp/300x300.png" roundedCircle />
      </Col>

        <Col id="about-me">
        <h3>About Me</h3>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </Col>
        </Container>

      <Container id="project-results">
        <h3>Project Work</h3>
          <ProjectResults />
      </Container>

      <Container>
        <h3>Contact</h3>
      </Container>
      
      </Container>
      
      {/* <Container>

        <ProjectResults />

      </Container> */}
  
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
