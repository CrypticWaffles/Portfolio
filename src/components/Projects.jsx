// Test Data
const myProjects = [
  {
    id: 1,
    title: 'Reaper Project',
    description: 'A full-stack capstone application built with...', 
    techStack: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/CrypticWaffles/reaper-project'
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    description: 'A responsive developer portfolio highlighting my recent work.',
    techStack: ['React', 'Vite', 'CSS'],
    githubLink: 'https://github.com/CrypticWaffles/portfolio'
  }
];

// Projects.jsx
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects">
      <h2>My Work</h2>
      <div className="project-grid">
        {myProjects.map(project => (
          <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
}