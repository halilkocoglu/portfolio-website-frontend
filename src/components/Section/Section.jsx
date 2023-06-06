import About from "./About/About";
import Contact from "./Contact/Contact";
import Corousel from "./Corousel/Corousel";
import Projects from "./Projects/Projects";
import "./section.css";

function Section() {
  return (
    <div className="section-container">
        <Corousel />
        <About />
        <Projects />
        <Contact />
    </div>
  )
}

export default Section