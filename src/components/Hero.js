import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Janith</h1>
        <p>Passionate Developer & Creative Problem Solver</p>
        <button className="cta-button" onClick={scrollToContact}>
          Get In Touch
        </button>
      </div>
    </section>
  );
};

export default Hero; 