import React, { useState, useEffect } from 'react';
import { Carousel, Image } from 'react-bootstrap';

const ProjectResults = () => {
    const [projectsArray, setProjectsArray] = useState([]);

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
        <Carousel>
            {projectsArray.map((element) => (
                // <div>{element.name}</div>
            
            <Carousel.Item key={element.id}>
                <Image className="carousel-img" src={`assets/${element.id}.png`} />
                    <Carousel.Caption>
                    <h3>{element.name}</h3>
                    <p>{element.description}</p>
                    </Carousel.Caption>
            </Carousel.Item>
            
            )
        )}
        </Carousel>
        </div>
    )
}

export default ProjectResults;