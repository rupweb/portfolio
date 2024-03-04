import React from 'react';
import Project from './Project.js';
import projectsData from '../data/projects.json';

function Projects() {
  return (
    <div>
      {projectsData.map(project => (
        <Project
          key={project.id}
          title={project.title}
          image={project.image}
          tech={project.tech}
          url={project.url}
          github={project.github}
        />
      ))}
    </div>
  );
}

export default Projects;