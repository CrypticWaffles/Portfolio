export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Miles Griffith</h1>
        <p className="hero-tagline">Software Development Student &amp; Full-Stack Developer</p>
        {/*TODO: Replace sub text*/}
        <p className="hero-sub">
          I build web and mobile applications, from frontend interfaces to backend APIs.
          Currently seeking software engineering internships.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
          <a href="/Miles_Griffith.pdf" download className="btn btn-outline">Download Resume</a>
        </div>
      </div>
      <div className="hero-scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
