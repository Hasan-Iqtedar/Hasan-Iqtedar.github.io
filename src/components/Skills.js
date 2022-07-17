import "../styles/skills.css";

function importImages(regex) {
  let images = [];
  regex.keys().forEach((item) => {
    images.push({
      data: regex(item),
      name: item.replace("./", "").split(".")[0],
    });
  });
  return images;
}

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
            <div className="skill-container">
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
            <div className="skill-container">
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
            <div className="skill-container">
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
