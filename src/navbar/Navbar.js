import { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li><Link to="AboutMe" smooth={true} activeClass="active">About Me</Link></li>
        <li><Link to="Skills" smooth={true} activeClass="active">Skills</Link></li>
        <li><Link to="Projects" smooth={true} activeClass="active">Projects</Link></li>
        <li><Link to="Experience" smooth={true} activeClass="active">Experience</Link></li>
        <li><Link to="Education" smooth={true} activeClass="active">Education</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
