import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* LEFT LOGO */}
      <div className="footer-left">
        <h2 className="footer-logo">🍽️ FoodApp</h2>
        <p>© 2025 FoodApp Limited</p>

        {/* SOCIAL ICONS */}
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" className="icon instagram">
            <FaInstagram />
          </a>

          <a href="https://linkedin.com" target="_blank" className="icon linkedin">
            <FaLinkedin />
          </a>

          <a href="https://facebook.com" target="_blank" className="icon facebook">
            <FaFacebook />
          </a>

          <a href="https://wa.me/1234567890" target="_blank" className="icon whatsapp">
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* COLUMNS */}
      <div className="footer-columns">

        <div className="footer-col">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Team</p>
          <p>Our Services</p>
          <p>Offers</p>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>Help & Support</p>
          <p>Partner with us</p>
          <p>Ride with us</p>
        </div>

        <div className="footer-col">
          <h4>Available in</h4>
          <p>Bangalore</p>
          <p>Hyderabad</p>
          <p>Mumbai</p>
          <p>Chennai</p>

          <select className="cities-dropdown">
            <option>600+ Cities</option>
          </select>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <p>Terms & Conditions</p>
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
          <p>Investor Relations</p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
