import React from 'react';
import './style.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="#resume" className="nav-link">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;