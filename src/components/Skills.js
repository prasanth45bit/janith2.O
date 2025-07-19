import React from 'react';
import { 
  FaHtml5, 
  FaNodeJs, 
  FaDatabase, 
  FaMobileAlt, 
  FaTools, 
  FaLightbulb 
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      icon: <FaHtml5 />,
      title: "Frontend Development",
      description: "HTML5, CSS3, JavaScript, React, Vue.js"
    },
    {
      icon: <FaNodeJs />,
      title: "Backend Development",
      description: "Node.js, Python, Java, Express.js, Django"
    },
    {
      icon: <FaDatabase />,
      title: "Database & Cloud",
      description: "MongoDB, PostgreSQL, AWS, Docker, Kubernetes"
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Development",
      description: "React Native, Flutter, iOS, Android"
    },
    {
      icon: <FaTools />,
      title: "Tools & Technologies",
      description: "Git, VS Code, Figma, Jira, Agile"
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      description: "Algorithm Design, System Architecture, Optimization"
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h4>{skill.title}</h4>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 