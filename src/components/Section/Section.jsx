import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import "./section.css";

function Section() {
  return (
    <div className="section-container">
        <About />
        <Projects />
        <Contact />
    </div>
  )
}

export default Section