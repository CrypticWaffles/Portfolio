export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-label">About Me</h2>
        <div className="about-grid">
          {/*TODO: Replace about text*/}
          <div className="about-text">
            <p>
              I'm a Computer Science student with a passion for building things that live on the
              internet. I enjoy working across the full stack, from crafting clean user interfaces
              to designing backend systems and databases.
            </p>
            <p>
              I'm currently looking for internship opportunities where I can contribute to real
              products, learn from experienced engineers, and grow as a developer. I'm drawn to
              projects with meaningful impact and teams that care about doing things right.
            </p>
          </div>
          <div className="about-facts">
            <div className="fact">
              <span className="fact-label">Focus</span>
              <span className="fact-value">Full-Stack Development</span>
            </div>
            <div className="fact">
              <span className="fact-label">Status</span>
              <span className="fact-value accent">Open to Internships</span>
            </div>
            <div className="fact">
              <span className="fact-label">GitHub</span>
              <span className="fact-value">
                <a href="https://github.com/CrypticWaffles" target="_blank" rel="noopener noreferrer">
                  CrypticWaffles
                </a>
              </span>
            </div>
            <div className="fact">
              <span className="fact-label">LinkedIn</span>
              <span className="fact-value">
                <a href="https://www.linkedin.com/in/mbgriffi/" target="_blank" rel="noopener noreferrer">
                  mbgriffi
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
