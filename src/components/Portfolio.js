import React from 'react';
import styles from '../css/Portfolio.module.css';

// Import a CSS module or regular CSS file for styling, if desired
// import styles from './Portfolio.module.css';

function Portfolio() {
  // Placeholder projects data
  const projects = [
    { id: 1, title: 'Project 1', description: 'A brief description of Project 1.' },
    { id: 2, title: 'Project 2', description: 'A brief description of Project 2.' },
    // Add more projects as needed
  ];

  return (
    <div className={styles.portfolio}>
      <h2>My Portfolio</h2>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
