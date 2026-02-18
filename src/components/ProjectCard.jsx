// ProjectCard.jsx
export default function ProjectCard({ title, description, techStack, githubLink }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {techStack.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <a href={githubLink}>View Code</a>
    </div>
  );
}