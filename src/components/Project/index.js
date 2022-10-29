import React from 'react';

function Project(props) {

    const { name, githubLink, appLink, imgLink } = props.project;
    return (
        <div>
            <img src={imgLink} alt={name} height='180' width='320'></img>
        </div>
    )
}

export default Project;