import React from 'react';
import '../styles/images.css'
import '../styles/project.css'

function Project({ title, image, tech, url, github }) {
  const path = `/images/${image}`;

  return (
    <div className="column">
      <h3>{title}</h3>
      <img src={path} alt={title} />
      <p>{tech}</p>
      <p>
        <a href={url}>View Project</a> | <a href={github}>GitHub</a>
      </p>
    </div>
  );
}

export default Project;