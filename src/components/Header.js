import "../styles/header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
