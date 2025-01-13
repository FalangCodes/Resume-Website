import './App.css';
import myPhoto from'./profile.jpg';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaHtml5, FaCss3Alt, FaGitAlt, FaPython  } from 'react-icons/fa';

function App() {
  return (
    <div>
      <Navbar />

      <section className="AboutMe">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            Hello! My name is Kgotsofalang Kakudi, a passionate ICT student and aspiring software developer with a love for backend development and problem-solving. I am constantly learning and growing, aiming to create innovative and efficient solutions. Take a tour of this website to find out more!
          </p>
          <img src={myPhoto} alt="About Me" className="about-image" />
        </div>
      </section>


      <section className="Skills">
        <h2>Skills</h2>
        <div className="skill-list">
          <div className="skill-item"><a href='https://www.javascript.com/' target="_blank" rel="noopener noreferrer"><FaNodeJs size={50}/></a></div>
          <div className="skill-item"><a href='https://react.dev/' target="_blank" rel="noopener noreferrer"><FaReact size={50}/></a></div>
          <div className="skill-item"><a href='https://www.python.org/' target="_blank" rel="noopener noreferrer"><FaPython size={50}/></a></div>
          <div className="skill-item"><a href='https://www.w3schools.com/sql/sql_intro.asp' target="_blank" rel="noopener noreferrer"><FaDatabase size={50}/></a></div>
          <div className="skill-item"><a href='https://git-scm.com/' target="_blank" rel="noopener noreferrer"><FaGitAlt size={50}/></a></div>
        </div>
      </section>


      <section className='Projects'>
        <h2>Projects</h2>
        <div className="project-cards-container">
          <a href="https://reactkeyboard.netlify.app/" className="project-card">
            <h3>Virtual Keyboard</h3>
            <p>This is a school project that included using React to develop a virtual keyboard that mimics the functions of a physical keyboard</p>
            <div className="icons">
            <FaReact className="icon" />
            <FaNodeJs className="icon" />
            <FaDatabase className="icon" />
            <FaGithub className="icons"/>
          </div>
          </a>
          <a href="https://learniverseweb.netlify.app/" className="project-card">
            <h3>Gamified-Learning Platform</h3>
            <p>Inspired by a 2024 TelkomLearn hackathon, this project is a platform that allows users to learn on the platform in a gamified  and fun way</p>
            <div className="icons">
            <FaReact className="icon" />
            <FaNodeJs className="icon" />
            <FaDatabase className="icon" />
            <FaGithub className="icons"/>
          </div>
          </a>
          <a href="#project3" className="project-card">
            <h3>University Information Hub</h3>
            <p>Inspired by a school project, this platform is a place for students to gather Information about South African universities. This is mostly helpful for students looking to study at any public University in South Africa</p>
            <FaHtml5 size={20} className="icon" />
            <FaCss3Alt size={20} className="icon" />
          </a>
        </div>
      </section>



      <section className='Experience'>
        <h2>Experience</h2>
        <p>
          <strong>Human Resources Intern</strong> at The Student Hub - August 2022 to
          October 2022
        </p>
        <ul>
          <li>Reviewed employee contracts</li>
          <li>Reviewed and suggest changes to company policies</li>
          <li>Learned about contractual laws</li>
          <li>Made weekly presentation as per company request on learned content</li>
        </ul>

        <p>
          <strong>Peer Mentor</strong> at Sol Plaatje University - February 2024 to
          November 2024
        </p>
        <ul>
          <li>Provide positive support, practical information, and advice regarding university life.</li>
          <li>Provide correct avenues to First-Time Entry Students to university resources and support services on campus.</li>
          <li>Provide positive story-telling and sharing of knowledge and experiences to advance First-Entry students.</li>
          <li>Regular group and individual consultation and sessions with First-Time-Entry students.</li>
        </ul>

        <p>
          <strong>ICT FASSET Buddy</strong> at Sol Plaatje University - May 2022 to
          October 2022
        </p>
        <ul>
          <li>Assisting assigned students with ICT related course work</li>
          <li>Host weekly sessions with assigned students</li>
          <li>Write monthly reports on the progress of the assigned students and the program</li>
          <li>Drive a positive impact towards the Fasset program</li>
        </ul>
      </section>

      <section className='Education'>
        <h2>Education</h2>
        <p>
          <strong>Diploma in ICT</strong> - Sol Plaatje University (2023 - 2025)
        </p>
        <ul>
          <li>Focus: Applications Development, Data Analysis & Visualization, Software Engineering</li>
          <li>1st Year Average: 71% </li>
          <li>2nd Year Average: 81% </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}

export default App;
