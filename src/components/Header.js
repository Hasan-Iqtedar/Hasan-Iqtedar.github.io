import "../styles/header.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Skill</a>
        <a href="#contact" to='/' >Contact</a>
      </div>
    </div>
  );
};

export default Header;
