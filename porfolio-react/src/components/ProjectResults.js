import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const ProjectResults = () => {
    const [projectsArray, setProjectsArray] = useState([]);

    useEffect(() => {
        gitFetch()
    }, [])

    const gitFetch = async () => {
        const projObjectArray = [];

        const response = await (fetch(`https://api.github.com/users/JacobYaws/repos`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const projects = data?.forEach((project) => {
            const projObject = { name: project.name, id: project.id, url: project.html_url}
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
            <img className="carousel-img" src="https://placehold.jp/300x300.png" />
              <Carousel.Caption>
                <h3>{element.name}</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
          </Carousel.Item>
         
        )

        )}
        </Carousel>
        </div>
    )
}

export default ProjectResults;