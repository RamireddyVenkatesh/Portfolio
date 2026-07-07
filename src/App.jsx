import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      <footer className="bg-gray-950 py-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Venkatesh Ramireddy. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;