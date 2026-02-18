import profilePic from '../assets/profile-pic.png';

// Hero.jsx
export default function Hero() {
  return (
    <section className="hero" id="home">
      <img src={profilePic} alt="Miles Griffith" className="profile-pic" height="100px"/>
      <h1>Hi, I'm Miles Griffith.</h1>
      <h2>Software Development Student at Bellevue College</h2>
      <p>
        I enjoy building clean, functional applications and solving complex problems. 
        I am currently seeking new development opportunities in the Greater Seattle Area.
      </p>
      <a href="#projects" className="button">View My Work</a>
    </section>
  );
}