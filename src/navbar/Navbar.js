import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="navbar-brand">
        <Link to="AboutMe" smooth={true}>
          Kgotsofalang Kakudi
        </Link>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="AboutMe" smooth={true} activeClass="active" onClick={() => setIsMenuOpen(false)}>
            About Me
          </Link>
        </li>
        <li>
          <Link to="Skills" smooth={true} activeClass="active" onClick={() => setIsMenuOpen(false)}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="Projects" smooth={true} activeClass="active" onClick={() => setIsMenuOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="Experience" smooth={true} activeClass="active" onClick={() => setIsMenuOpen(false)}>
            Experience
          </Link>
        </li>
        <li>
          <Link to="Education" smooth={true} activeClass="active" onClick={() => setIsMenuOpen(false)}>
            Education
          </Link>
        </li>
        <li><a href="\My Resume (online).pdf" target="_blank" rel="noopener noreferrer">
          <button className="view-fullscreen-button">View Resume</button></a>    
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
