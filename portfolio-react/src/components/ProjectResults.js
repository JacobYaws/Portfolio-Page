import React, { useState, useEffect } from 'react';
import { Carousel, Image, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
// import image616700957 from '../assets/616700957/Assign19screenshot1.png'
// import image664301406 from '../assets/664301406/Assign19screenshot1.png'

const ProjectResults = () => {
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
        <div>
            <Container id="project-results">
        <h3>Personal Work</h3>
        <Carousel>
            {projectsArray.map((element) => (
                // <div>{element.name}</div>
                
            <Carousel.Item key={element.id} >
                <Link to={element.url}>
                <Image className="carousel-img" src={require(`../assets/${element.id}/stock.png`)} />
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
        </div>
    )
}

export default ProjectResults;