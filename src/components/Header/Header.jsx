import { useScrollContext } from "../../Contexts/scrollContext";
import "./header.css";

function Header() {
  const {scrollToSection} = useScrollContext()
  return (
    <div className="header-container">
        <ul className="navbar">
          <li>
            <button onClick={() => scrollToSection('about')}className="about" >About</button>
          </li>
          <li>
            <button  onClick={() => scrollToSection('projects')} className="projects">Projects</button>
          </li>
          <li>
            <button  onClick={() => scrollToSection('contacts')} className="contacts">Contact</button>
          </li>
        </ul>
    </div>
  )
}

export default Header