import React from 'react';
import { FaShoppingCart, FaMobileAlt, FaChartLine, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      github: "#",
      live: "#"
    },
    {
      icon: <FaMobileAlt />,
      title: "Task Management App",
      description: "A cross-platform mobile app for task management with real-time synchronization and team collaboration.",
      github: "#",
      live: "#"
    },
    {
      icon: <FaChartLine />,
      title: "Data Analytics Dashboard",
      description: "An interactive dashboard for data visualization and analytics with real-time data processing capabilities.",
      github: "#",
      live: "#"
    },
    {
      icon: <FaChartLine />,
      title: "Data Analytics Dashboard",
      description: "An interactive dashboard for data visualization and analytics with real-time data processing capabilities.",
      github: "#",
      live: "#"
    },
    {
      icon: <FaChartLine />,
      title: "Data Analytics Dashboard",
      description: "An interactive dashboard for data visualization and analytics with real-time data processing capabilities.",
      github: "#",
      live: "#"
    },
    {
      icon: <FaChartLine />,
      title: "Janith's Portfolio",
      description: "An interactive dashboard for data visualization and analytics with real-time data processing capabilities.",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                {project.icon}
              </div>
              <div className="project-content">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.github}>
                    <FaGithub /> Code
                  </a>
                  <a href={project.live}>
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 