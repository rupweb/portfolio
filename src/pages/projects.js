import Project from '../components/Project';
import projects from '../data/projects.json';
import styles from '../styles/projects.module.css';

export default function Projects() {
  return (
    <section className={styles.projectsSection}>
      <h1>My Projects</h1> 
      <div className={styles.projects}>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}