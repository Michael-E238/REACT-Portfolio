import React from 'react';
import './style.css';

function AboutMe() {
  return (
    <section id="about" className="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <img
          src={require('../images/your-profile-picture.jpg')}
          alt="Your Profile Picture"
          className="about-image"
        />
        <p className="about-text">
        Hello, I'm Michael. Although I'm relatively new to development, I'm committed to continuous learning and professional growth. I'm excited to work with experienced professionals and learn from their expertise.

I have a strong foundation in HTML, CSS, JavaScript, React, and Python. My focus is always on delivering exceptional user experiences and meeting client expectations. I enjoy tackling complex problems and finding creative solutions, with a keen eye for design and a passion for crafting intuitive and user-friendly interfaces.

When I'm not coding, you can typically find me either browsing car parts or playing games. I'm excited to collaborate with like-minded professionals and work on projects that challenge me and allow me to grow. Let's connect and see how we can work together to create something amazing!
</p>
      </div>
    </section>
  );
}

export default AboutMe;