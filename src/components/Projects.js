import { projects } from "../data/projects";
import "../styles/projects.css";

const Projects = (props) => {
  return (
    <div id="projects">
      <h1>Projects</h1>

      <div className="container">
        {projects.map((project) => {
          return (
            <div key={project.name} className="project-card">
              <div className="img-container">
                <img src={project.img} alt={project.name} />
              </div>
              <h4>{project.name}</h4>
              <div className="links-container">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
