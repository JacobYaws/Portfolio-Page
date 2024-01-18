import React, { useState, useEffect } from 'react';
import { Carousel, Image, Container } from 'react-bootstrap';
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
            // if (project.id.find(excludes) )
            // const idCheck = excludes.find((projectId) => projectId == excludes); // Start for filtering out unwanted projects going into the carousel. Looking into importing images and filtering out projects that way.
            projObjectArray.push(projObject);
            })
            setProjectsArray(projObjectArray)

        // setProjectsArray()

        }))
    }

    return (
        <div>
            <Container id="project-results">
        <h3>Project Work</h3>
        <Carousel>
            {projectsArray.map((element) => (
                // <div>{element.name}</div>
                
            <Carousel.Item key={element.id}>
                {/* <Image className="carousel-img" src={imageMap.get(element.id)} /> */}
                <Image className="carousel-img" src={require(`../assets/${element.id}/stock.png`)} />
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