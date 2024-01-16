
import { useState, useEffect } from 'react'
import search from '../utils/API';

const ProjectContainer = () => {
    const repos = "https://api.github.com/users/JacobYaws/repos";
    const [results, setResults] = useState([])
    console.log(repos)
    const getProjects = async (repos) => {
        const response = await search(repos);
        setResults(response.data.data);
        
    }

    // useEffect(() => {
    //     getProjects()
    // })
getProjects();

    return (
        <div>
            <ProjectResults results={results} />
        </div>
    )
}

export default ProjectContainer;