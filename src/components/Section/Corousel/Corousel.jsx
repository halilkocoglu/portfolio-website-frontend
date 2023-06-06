
import pp from "../../../assets/pp.jpg"
import "./corousel.css"

function Corousel() {
  return (
    <div className="carousel">
        <div className="corousel-info">
            <h3>Halil İbrahim Koçoğlu</h3>
            <h3>Web Developer</h3>
        </div>
        <div className="img">
            <img src={pp} alt="pp" />
        </div>
  </div>
  )
}

export default Corousel