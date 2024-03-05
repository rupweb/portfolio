import React from 'react';
import Project from './Project.js';
import projectsData from '../data/projects.json';
import '../styles/projects.css';

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-grid">
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
    </div>
  );
}

export default Projects;
