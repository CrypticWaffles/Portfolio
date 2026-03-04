import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="footer">
        <p>
          Built by Miles Griffith &middot;{' '}
          <a href="https://github.com/CrypticWaffles/Portfolio" target="_blank" rel="noopener noreferrer">
            Source
          </a>
        </p>
      </footer>
    </>
  );
}
