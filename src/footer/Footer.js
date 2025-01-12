import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <h4>CONTACT ME:</h4>
        <p>&copy; 2025 Kgotsofalang Kakudi. All rights reserved.</p>
        <div className="social-links">
          <a href="https://linkedin.com/in/kgotsofalang-kakudi-822214230" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/FalangCodes" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="mailto:kgotsofalangkakudi@gmail.com">
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
