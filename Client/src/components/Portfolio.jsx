import React from 'react';
import './style.css';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2 className="portfolio-title">Portfolio</h2>
      <p className="portfolio-text">
        Take a look at some of my recent projects and experiences. You can also check out my GitHub profile to see more of my code and projects.
      </p>
      <div className="portfolio-links">
        <a href="https://github.com/Michael-E238" className="github-link">
          GitHub Profile
        </a>
        <a href="https://github.com/Michael-E238?tab=repositories" className="github-link">
          View My Repositories
        </a>
      </div>
      <div className="portfolio-projects">
        <h3 className="project-title">Project 1: [Hobby-Hub]</h3>
        <p className="project-text">
          Here my team and I developed a simplistic website to recommend hobbies and give people a general Idea as wo what the cost would look like.
        </p>
        <a href="https://github.com/Michael-E238/Hobby-Hub" className="project-link">
          View Project 1 on GitHub
        </a>
        <h3 className="project-title">Project 2: [PixelPit]</h3>
        <p className="project-text">
          This is my current project that focuses on giving users a place to create threads and chat about their favorite games.
        </p>
        <a href="https://github.com/Michael-E238/Forum_Site" className="project-link">
          View Project 2 on GitHub
        </a>
        {/* Add more projects here */}
      </div>
    </section>
  );
}