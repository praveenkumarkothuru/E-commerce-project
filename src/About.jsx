import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>

      <p className="about-description">
        Welcome to our e-commerce website! We are committed to delivering the best
        shopping experience with quality products and fast service.
      </p>

      <div className="about-section">
        <h2 className="section-heading">Our Mission</h2>
        <p className="section-text">
          Our mission is to offer top-quality products with a seamless shopping
          experience for our customers.
        </p>
      </div>

      <div className="about-section">
        <h2 className="section-heading">Our Team</h2>

        <div className="team-grid">
          <div className="team-card">
            <img src="https://via.placeholder.com/90" className="team-avatar" />
            <h3 className="team-name">Praveen</h3>
            <p className="team-role">Founder</p>
          </div>

          <div className="team-card">
            <img src="https://via.placeholder.com/90" className="team-avatar" />
            <h3 className="team-name">Kiran</h3>
            <p className="team-role">Developer</p>
          </div>

          <div className="team-card">
            <img src="https://via.placeholder.com/90" className="team-avatar" />
            <h3 className="team-name">Suman</h3>
            <p className="team-role">Designer</p>
          </div>
        </div>
      </div>

      <p className="footer-text">© 2025 Your Website. All Rights Reserved.</p>
    </div>
  );
}

export default About;
