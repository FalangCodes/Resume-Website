import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

import { personalInfo, skills, projects, experience, education } from './data/resume-data';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* --- HERO / ABOUT SECTION --- */}
      <section className="AboutMe">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>{personalInfo.name}</h3>
            <h4>{personalInfo.title}</h4>
            <p>{personalInfo.about}</p>
          </div>
          {/* Note: Ensure profile.jpg is in your public folder or imported if in src */}
          <img src={personalInfo.photo} alt={personalInfo.name} className="about-image" />
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section className="Skills" id="Skills">
        <h2>Technical Proficiency</h2>
        <div className="skills-grid">
          {skills.map((categoryGroup, index) => (
            // We pass the color to the style to make the border dynamic
            <div 
              key={index} 
              className="skill-category-card"
              style={{ borderTop: `4px solid ${categoryGroup.color}` }} 
            >
              <h3 style={{ color: categoryGroup.color }}>{categoryGroup.category}</h3>
              
              <div className="skill-items-container">
                {categoryGroup.items.map((skill, i) => (
                  <div key={i} className="skill-detail-item">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-details">{skill.details}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="Projects">
        <h2>Projects</h2>
        <div className="project-cards-container">
          {projects.map((project, index) => (
            <a key={index} href={project.link} className="project-card" target="_blank" rel="noopener noreferrer">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="tech-stack-container">
                {/* Rendering tech stack as text "Pills" instead of icons for clarity */}
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section className="Experience">
        <h2>Experience</h2>
        <div className="timeline">
          {experience.map((job, index) => (
            <div key={index} className="experience-item">
              <div className="job-header">
                <h3>{job.role}</h3>
                <span className="company">{job.company}</span>
                <span className="date">{job.period}</span>
              </div>
              <ul>
                {job.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* --- EDUCATION SECTION --- */}
      <section className="Education" id="Education">
        <h2>Education</h2>
        
        {education.map((edu, index) => {
          // --- AUTOMATION LOGIC START ---
          let graduationStatus = null;
          
          if (edu.graduationDate) {
            const today = new Date();
            const gradDate = new Date(edu.graduationDate);
            
            // Format the date to look like "April 2026"
            const dateString = gradDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

            // Compare dates
            if (today >= gradDate) {
              graduationStatus = <span className="status graduated">Graduated: {dateString}</span>;
            } else {
              graduationStatus = <span className="status expected">Expected Graduation: {dateString}</span>;
            }
          }
          // --- AUTOMATION LOGIC END ---

          return (
            <div key={index} className="education-item">
              <div className="edu-header">
                <h3>{edu.degree} - NQF {edu.nqf}</h3>
                <span className="period">{edu.period}</span>
              </div>
              
              <p className="institution"><strong>{edu.institution}</strong></p>
              
              {/* Show the Status (Expected vs Graduated) if it exists */}
              {graduationStatus && <div className="grad-status-container">{graduationStatus}</div>}

              {/* Show Average if it exists */}
              {edu.average && (
                <p className="edu-average">
                  Academic Average: <span className="score">{edu.average}</span>
                </p>
              )}

              {/* Show Majors Description */}
              {edu.majors && (
                <p className="edu-majors">
                  <strong>Majors:</strong> {edu.majors}
                </p>
              )}

              {/* Show bullet points if you have them (mostly for the Adv Diploma) */}
              {edu.details && edu.details.length > 0 && (
                <ul>
                  {edu.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </section>
      <Footer />
    </div>
  );
}

export default App;