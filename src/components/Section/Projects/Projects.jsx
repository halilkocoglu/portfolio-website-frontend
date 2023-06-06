import { useScrollContext } from "../../../Contexts/scrollContext";
import data from "../../../JSON/projects.json"
import "./projects.css";


function Projects() {
  const {sectionRefs} = useScrollContext();
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
                    <a href="#">Visit on GitHub...</a>
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