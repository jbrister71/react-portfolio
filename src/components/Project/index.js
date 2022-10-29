import React from 'react';

function Project(props) {

    const { name, githubLink, appLink, imgLink } = props.project;
    return (
        <div>
            <p>{name} <a href={githubLink}><i className='icon portfolio-icon bi bi-github'></i></a></p>
            <p></p>
            <a href={appLink}><img className='portfolio-img' src={imgLink} alt={name} height='240' width='426'></img></a>
        </div>
    )
}

export default Project;