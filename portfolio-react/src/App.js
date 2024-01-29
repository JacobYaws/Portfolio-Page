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
  const [projectsArray, setProjectsArray] = useState([]);
    // const imageMap = new Map()
    // imageMap.set(616700957, image616700957)
    // imageMap.set(664301406, image)


    useEffect(() => {
        gitFetch()
    }, [])

    const excludes = [566133333, 552179195]; //Excluding the portfolio project (this project) and a forked repository without any code that cannot be set to private
    const gitFetch = async () => {
        const projObjectArray = [];

        const response = await (fetch(`https://api.github.com/users/JacobYaws/repos`)
        .then(response => response.json())
        .then(data => {
           
            console.log(data)
            const projects = data?.forEach((project) => {
            let projectId = project.id
            console.log(projectId)
            const projObject = { name: project.name, id: project.id, url: project.html_url, description: project.description}
            projObjectArray.push(projObject);
            })
            setProjectsArray(projObjectArray)


        }))
    }
  return (

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
          <Col md='5' className='home-info'>
          <h1>Jacob Yaws</h1>
          <h3>Full Stack Web Developer</h3>
                <p>Welcome to my page! 
                My name is Jacob Yaws and I am looking to start a career in web development. 
                I am a former transportation team lead and former test technician in autonomy looking to start a career focused on software development.
                I have enjoyed the challenge of learning how to code and I am excited to keep learning new ways to improve and learn new ways to enhance my skills.
                I am eager to apply my skillset and help build new and exciting applications.
                 </p>
  
          </Col>
          <Col className="home-img-col" md='5'>
            <Image className="home-img" src={require('./assets/profile/IMG_2545.jpg')}/>
          </Col>
      </Container>


      <Container className='personal-work' id="personalwork">
        <Container className="project-results">
          <h3>Personal Work</h3>
          <Carousel>
              {projectsArray.map((element) => (
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
          )}

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
              <li>Linux</li>
              <li>Robotics</li>
              <li>Troubleshooting</li>
              <li>Problem Solving</li>
              </ul>
            </Col>
            <Col className="edu-col">
              <ul className="edu">
              {/* <li>Kansas State University <span>Bachelor of Science - Agricultural Technology and Management</span></li> */}
              <li className="li-span">Agricultural Technology & Management - <span>Kansas State University</span></li>
              <li className="li-span">Full Stack Coding Bootcamp - <span>University of Denver</span></li>
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
          </ul>
        </Container>
      </Container>
    </Container>
  );
}

export default App;
