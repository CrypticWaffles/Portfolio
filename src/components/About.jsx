export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-label">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I got into software because I like solving hard problems. There's something
              satisfying about taking a complex system apart and rebuilding it until it works.
              That drive, combined with wanting to prove there's no ceiling on what you can build
              regardless of where you come from, is what keeps me motivated to keep getting better.
            </p>
            <p>
              I work across the full stack and am comfortable on both ends, though I gravitate
              toward the logic-heavy side: API design, data modeling, and figuring out how systems
              fit together. I'm looking for an internship where I can contribute to real products
              and grow alongside engineers who care about doing things right.
            </p>
            <p>
              Outside of code, I read, play video games, watch anime, build Gunpla, and fall down
              too many rabbit holes online. That habit of diving deep into things just because
              they're interesting carries directly into how I approach problems.
            </p>
          </div>
          <div className="about-right">
            <div className="about-avatar">
              <img className="avatar-img" src="/images/headshot.jpg" alt="Miles Griffith" />
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
      </div>
    </section>
  );
}
