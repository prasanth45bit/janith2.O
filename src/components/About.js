import React from 'react';
import { FaUser } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate and dedicated developer with a love for creating innovative solutions that make a difference. 
              With a strong foundation in modern technologies and a creative mindset, I enjoy turning complex problems into 
              simple, beautiful solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community. I believe in continuous learning and staying up-to-date 
              with the latest industry trends.
            </p>
            <p>
              I'm always excited to take on new challenges and collaborate with like-minded individuals to build 
              amazing things together.
            </p>
          </div>
          <div className="profile-image">
            <FaUser />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 