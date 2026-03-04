export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Miles Griffith</h1>
        <p className="hero-tagline">Software Development Student &amp; Full-Stack Developer</p>
        <p className="hero-sub">
          Full-stack developer with a focus on React and Node.js. Currently a Software Development student at Bellevue College, looking for engineering internships.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
        </div>
      </div>
      <div className="hero-scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
