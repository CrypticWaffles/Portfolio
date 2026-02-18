import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
    <Header />
    <main>
      <Hero />
      <Projects />
      <Contact />
    </main>
    <Footer />
    </>
  );
}