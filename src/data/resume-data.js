// data/resume-data.js

export const personalInfo = {
  name: "Kgotsofalang Kakudi",
  title: "ICT Student & Aspiring Software Developer",
  about: "Hello! I’m Kgotsofalang Kakudi, a Software Developer specializing in Backend Systems and Architecture. I hold a Diploma in ICT and am currently pursuing my Advanced Diploma. I am passionate about building scalable solutions and solving complex problems with efficient code.",
  photo: "/profile.jpg", // Ensure this image is moved to the /public folder in Next.js
};

// src/data/resume-data.js

export const skills = [
  {
    category: "Frontend Engineering",
    color: "#3498db", // Blue Accent
    items: [
      { name: "React Ecosystem", details: "Next.js, Hooks, State Management" },
      { name: "UI Frameworks", details: "Tailwind CSS, Bootstrap, Shadcn" },
      { name: "Core Web", details: "HTML5, CSS3, JavaScript (ES6+)" }
    ]
  },
  {
    category: "Backend & Systems",
    color: "#27ae60", // Green Accent
    items: [
      { name: "Python", details: "Django, Django-REST Framework, Django Ninja, JWT Auth, Unit Testing" },
      { name: "Databases", details: "PostgreSQL, MySQL" },
      { name: "Data Analysis", details: "Pandas, NumPy, Visualization" 
      },
    ]
  },
  {
    category: "DevOps & Tools",
    color: "#eba536", // Orange Accent
    items: [
      { name: "Version Control", details: "Git, GitHub" },
      { name: "Cloud & Deployment", details: "Netlify, Azure Basics, Vercel, Amazon S3" },
      { name: "Development", details: "VS Code, Powershell" }
    ]
  }
];

export const projects = [
  {
    title: "Virtual Keyboard",
    description: "This is a school project that included using React to develop a virtual keyboard that mimics the functions of a physical keyboard.",
    link: "https://reactkeyboard.netlify.app/",
    tech: ["React", "Node.js", "Database", "Github"]
  },
  {
    title: "Gamified-Learning Platform",
    description: "Inspired by a 2024 TelkomLearn hackathon, this project is a platform that allows users to learn on the platform in a gamified and fun way.",
    link: "https://learniverseweb.netlify.app/",
    tech: ["React", "Node.js", "Database", "Github"]
  },
  {
    title: "Construction SaaS ERP", // Much stronger title
    description: "A multi-tenant cloud platform for construction management. Built using the Router-Controller-Service-Repository pattern to ensure scalable architecture and clean code separation.",
    link: null, // We set this to null because it's private
    status: "In Development", // We add a status flag
    tech: ["Django", "Python", "PostgreSQL", "System Architecture"]
  },
];

export const experience = [
  {
    role: "ICT Student Assistant",
    company: "Sol Plaatje University",
    period: "July 2025 - Oct 2025",
    tasks: [
      "Assisting assigned students with ICT related course work",
      "Host weekly sessions with assigned students",
      "Write monthly reports on the progress of the assigned students",
      "Drive a positive impact towards the Fasset program"
    ]
  },
  {
    role: "Student Coordinator",
    company: "Sol Plaatje University",
    period: "March 2025 - Current",
    tasks: [
      "Supervise logistics in bringing together students and stakeholders within accredited off-campus accommodation.",
      "Promote social cohesion, leadership development, and recognition programmes.",
      "Ensure students are exposed to environments that support academic excellence."
    ]
  },
  {
    role: "ICT Student Assistant",
    company: "Sol Plaatje University",
    period: "May 2024 - Oct 2024",
    tasks: [
      "Assisting assigned students with ICT related course work",
      "Host weekly sessions with assigned students",
      "Write monthly reports on the progress of the assigned students",
      "Drive a positive impact towards the Fasset program"
    ]
  },
  {
    role: "Peer Mentor",
    company: "Sol Plaatje University",
    period: "Feb 2024 - Nov 2024",
    tasks: [
      "Provide positive support, practical information, and advice regarding university life.",
      "Guide First-Time Entry Students to resources and support services.",
      "Regular group and individual consultation sessions."
    ]
  },
  {
    role: "Human Resources Intern",
    company: "The Student Hub",
    period: "Aug 2022 - Oct 2022",
    tasks: [
      "Reviewed employee contracts and suggested policy changes.",
      "Learned about contractual laws.",
      "Made weekly presentations on learned content."
    ]
  },
];

export const education = [
  {
    id: 1,
    degree: "Advanced Diploma in ICT (Applications Development)",
    nqf: "7",
    institution: "Sol Plaatje University",
    period: "2026 - Present",
    // We leave graduationDate null because you just started
    graduationDate: null, 
    majors: "System Analysis, Development Software, and Software Engineering",
    details: [
      "Specializing in advanced software engineering principles and enterprise application development.",
      "Focusing on research methodology and project management in IT."
    ]
  },
  {
    id: 2,
    degree: "Diploma in ICT (Applications Development)",
    nqf: "6",
    institution: "Sol Plaatje University",
    period: "2023 - 2025",
    // ISO Date format (YYYY-MM-DD) so the code can compare it easily. 
    // Set this to your estimated graduation day in April.
    graduationDate: "2026-04-15", 
    average: "76%",
    majors: "Applications Development, Data Analysis & Visualization, and Software Engineering",
    details: [] // Kept empty or optional if you want to add extra awards here
  }
];