import React from 'react';
import './style.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-text">
        If you'd like to get in touch with me, please feel free to send me a message using the form below.
      </p>
      <form className="contact-form">
        <label className="contact-label" htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" className="contact-input" />
        <label className="contact-label" htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" className="contact-input" />
        <label className="contact-label" htmlFor="message">Message:</label>
        <textarea id="message" name="message" className="contact-textarea" />
        <button type="submit" className="contact-button">Send Message</button>
      </form>
      <p className="contact-text">
        You can also find me on social media:
        <a href="https://github.com/Michael-E238" className="contact-link">GitHub</a>
        <a href="https://www.linkedin.com/in/michael-e238" className="contact-link">LinkedIn</a>
        <a href="https://twitter.com/michael_e238" className="contact-link">Twitter</a>
      </p>
    </section>
  );
}

export default Contact;