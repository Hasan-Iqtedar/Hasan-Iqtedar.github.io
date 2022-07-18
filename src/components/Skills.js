import { importImages } from "../utils";
import "../styles/skills.css";

const backendImages = importImages(
  require.context("../assets/backend", false, /\.(png)$/)
);

const frontendImages = importImages(
  require.context("../assets/frontend", false, /\.(png)$/)
);

const miscellaneousImages = importImages(
  require.context("../assets/miscellaneous", false, /\.(png)$/)
);

const Skills = (props) => {
  return (
    <div id="skills">
      <h1>Skills</h1>
      <h2>Backend</h2>
      <div className="container">
        {backendImages.map((img) => {
          return (
            <div key={img.name} className="skill-container">
              <div className="img-container">
                <img src={img.data} alt={img.name} />
              </div>
              <p>{img.name}</p>
            </div>
          );
        })}
      </div>

      <h2>Frontend</h2>
      <div className="container">
        {frontendImages.map((img) => {
          return (
            <div key={img.name} className="skill-container">
              <div className="img-container">
                <img src={img.data} alt={img.name} />
              </div>
              <p>{img.name}</p>
            </div>
          );
        })}
      </div>

      <h2>Miscellaneous</h2>
      <div className="container">
        {miscellaneousImages.map((img) => {
          return (
            <div key={img.name} className="skill-container">
              <div className="img-container">
                <img src={img.data} alt={img.name} />
              </div>
              <p>{img.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
