
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useScrollContext } from "../../../Contexts/scrollContext";
import data from "../../../JSON/projects.json"
import "./projects.css";
import { useEffect, useState } from 'react';


function Projects() {
  const {sectionRefs} = useScrollContext();
  const [hoveredID , setHoveredID] = useState(null)
  const [isHovered , setIsHovered] = useState(false)

  const mouseOverHandle = (id) => {
      setHoveredID(id)
  }
  const mouseOutHandle = () => {
    setHoveredID(null)
    setIsHovered(false)
  }
  
  useEffect(() => {
    setIsHovered(true)
  },[hoveredID])

  return (
    <section ref={sectionRefs.projects}>
      <h1>Projects</h1>
        {
          data.map((item) => { 
            return (
              <div className="project-card" key={item.id}>
                <div className="card-body">
                  <div className={item.id % 2 === 0 ? "" : "d-none"}>
                    <img className="left-img" src={item.img} alt={item.id} />
                  </div>
                <div className="card-info">
                  <div className="title">
                    <h3 className={item.id % 2 === 0 ? "right" : "left" }>{item.name}</h3>
                  </div>
                  <div>
                    {item.description}
                  </div>
                  <div className="card-buttons">
                    <button 
                    className='btn' 
                    onMouseOver={() =>mouseOverHandle(item.id) }
                    onMouseLeave={mouseOutHandle}
                    >
                      <a href={item.link} target="_blank" rel="noreferrer" >
                      <AiOutlineArrowRight />
                      </a>
                    </button >
                      <span className={`link ${item.id===hoveredID&&isHovered&& "d-block"}`}> 
                          Visit GitHub...
                      </span>
                  </div>
                </div>
                  <div className={item.id % 2 === 0 ? "d-none" : ""}>
                    <img className="right-img" src={item.img} alt={item.id} />
                  </div>
                </div>
              </div>
            )
          })
        }
    </section>
  )
}

export default Projects