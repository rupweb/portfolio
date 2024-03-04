import React from 'react';

function Project({ title, image, url, github }) {
  const path = `/images/${image}`;

  return (
    <div>
      <h3>{title}</h3>
      <a href={url}>Deployed Project</a>
      <a href={github}>GitHub Repo</a>
      <img src={path} alt={title} />
    </div>
  );
}

export default Project;