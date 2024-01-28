// import logo from './logo.svg';
import './App.css';
import { Container, Col, Row, Image, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
// import ProjectResults from './components/ProjectResults';
// import AboutMeAVI from './components/AboutMeAVI';
// import SkillsEdu from './components/SkillsEdu';
// import ContactInfo from './components/ContactInfo';


function App() {
  // const [projectsArray, setProjectsArray] = useState([]);
  //   // const imageMap = new Map()
  //   // imageMap.set(616700957, image616700957)
  //   // imageMap.set(664301406, image)


  //   useEffect(() => {
  //       gitFetch()
  //   }, [])

  //   const excludes = [566133333, 552179195]; //Excluding the portfolio project (this project) and a forked repository without any code that cannot be set to private
  //   const gitFetch = async () => {
  //       const projObjectArray = [];

  //       const response = await (fetch(`https://api.github.com/users/JacobYaws/repos`)
  //       .then(response => response.json())
  //       .then(data => {
           
  //           console.log(data)
  //           const projects = data?.forEach((project) => {
  //           let projectId = project.id
  //           console.log(projectId)
  //           const projObject = { name: project.name, id: project.id, url: project.html_url, description: project.description}
  //           projObjectArray.push(projObject);
  //           })
  //           setProjectsArray(projObjectArray)


  //       }))
  //   }
  return (
    // <div className="App">
    //   {/* <Navbar>
    //     <Nav>
    //       <Nav.Link id="main-link">Home Button</Nav.Link>
    //       <Nav.Link className="secondary-link">About Me</Nav.Link>
    //       <Nav.Link className="secondary-link">Work</Nav.Link>
    //       <Nav.Link className="secondary-link">Contact</Nav.Link>
    //     </Nav>
    //   </Navbar> */}
    //   <Container className="main-container">
    //     <AboutMeAVI />
    //     <ProjectResults />
    //     <SkillsEdu />
    //     <ContactInfo />
      
    //   </Container>
      
    // </div>

    <Container className='body'>
      <header className='header'>
        <a href='#' className='logo'>Jacob</a>

        <nav className='navbar'>
          {/* <a href='#'>Home</a>  */}
          <a href='#aboutme'>About Me</a> 
          <a href='#personalwork'>Personal Work</a> 
          <a href='#skillsedu'>Skills & Eduction</a> 
          <a href='#contact'>Contact</a> 
        </nav>
      </header>

      <Container className='home' id="aboutme">
          <Col md='6' className='home-info'>
          <h1>Jacob Yaws</h1>
          <h3>Full Stack Web Developer</h3>
          <p>I am looking to start a career in web development. 
                I formerly worked as a team lead in transportation and a test technician for an autonomous yard truck company. 
                I am eager to start applying my skills and learning new ones in the tech industry.</p>
          </Col>
          <Col className="home-img-col"md='5'>
            <Image className="home-img" src={require('./assets/profile/IMG_2545.jpg')}/>
          </Col>
      </Container>


      <Container className='personal-work' id="personalwork">
        <Container className="project-results">
          <h3>Personal Work</h3>
          <Carousel>
              {/* {projectsArray.map((element) => (
                  // <div>{element.name}</div>
                  
              <Carousel.Item key={element.id} >
                  <Link to={element.url}>
                  <Image className="carousel-img" src={require(`./assets/${element.id}/stock.png`)} />
                  </Link>
                      <Carousel.Caption>
                      <h2 className="caption-text">{element.name}</h2>
                      <p className="caption-text">{element.description}</p>
                      </Carousel.Caption>
              </Carousel.Item>
              )
          )} */}

                                    <Carousel.Item >
                                    <Link>
                                    <Image className="carousel-img" src={require(`./assets/test/stock.png`)} />
                                    
                                    </Link>
                                        <Carousel.Caption>
                                        <h2 className="caption-text">name</h2>
                                        <p className="caption-text">description</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
          </Carousel>
          </Container>
      </Container>
      <Container className="skills-edu-container" id="skillsedu">
        <Container className="skills-edu">
          <h3>Skills & Education</h3>
          <Row className="list-items">
            <Col className="skills-col">
              <ul className="skills">
              <li>MERN Stack</li>
              <li>Javascript</li>
              <li>MySQL</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Linux Systems</li>
              </ul>
            </Col>
            <Col className="edu-col">
              <ul className="edu">
              {/* <li>Kansas State University <span>Bachelor of Science - Agricultural Technology and Management</span></li> */}
              <li>Kansas State University - Agricultural Technology and Management</li>
              <li>Full Stack Coding Bootcamp - University of Denver</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className='contact-container' id="contact">
      <h3>Contact</h3>
        <Container>
          <ul className="contact-list">
            <li><a href="https://github.com/JacobYaws">Github</a></li>
            <li><a href="www.linkedin.com/in/jacob-yaws">LinkedIn</a></li>
            <li><a href="mailto:jacobyaws@gmail.com">jacobyaws@gmail.com</a></li>
            {/* <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
  Popover on top
</button> */}
          </ul>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
