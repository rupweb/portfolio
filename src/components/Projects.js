import React from 'react';
import Project from './Project';
import projectsData from '../projectsData.json';

function Projects() {
  return (
    <div>
      {projectsData.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
