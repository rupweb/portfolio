import React from 'react';

function Project({ project }) {
  return (
    <div>
      <h3>{project.title}</h3>
      <a href={project.deployedLink}>Deployed Project</a>
      <a href={project.githubLink}>GitHub Repo</a>
      <img src={project.image} alt={project.title} />
    </div>
  );
}

export default Project;