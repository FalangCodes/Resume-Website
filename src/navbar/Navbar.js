import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* LOGO */}
        <Link to="AboutMe" smooth={true} className="navbar-logo" onClick={closeMobileMenu}>
          Kgotsofalang Kakudi
        </Link>

        {/* HAMBURGER ICON (Mobile Only) */}
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        {/* MENU */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="AboutMe" smooth={true} className="nav-links" onClick={closeMobileMenu}>
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Skills" smooth={true} className="nav-links" onClick={closeMobileMenu}>
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Projects" smooth={true} className="nav-links" onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Experience" smooth={true} className="nav-links" onClick={closeMobileMenu}>
              Experience
            </Link>
          </li>
          <li className="nav-item">
             <Link to="Education" smooth={true} className="nav-links" onClick={closeMobileMenu}>
              Education
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;