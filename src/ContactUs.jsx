import React from "react";
import "./Style.css";

function ContactUs() {
  return (
    <div className="z-contact-wrapper">

      {/* HERO */}
      <section className="z-contact-hero">
        <h1>Contact Us</h1>
        <p>We are always here to help you with anything.</p>
      </section>

      {/* INFO CARDS */}
      <section className="z-info-grid">

        <div className="z-info-card">
          <i className="bi bi-telephone-fill z-icon"></i>
          <h3>Phone</h3>
          <p>+91 9391488430</p>
        </div>

        <div className="z-info-card">
          <i className="bi bi-envelope-fill z-icon"></i>
          <h3>Email</h3>
          <p>praveeen@gmail.com</p>
        </div>

        <div className="z-info-card">
          <i className="bi bi-geo-alt-fill z-icon"></i>
          <h3>Address</h3>
          <p>Rajahmundry, Andhra Pradesh</p>
        </div>

      </section>

      {/* FORM */}
      <section className="z-contact-form-section">
        <h2>Send a Message</h2>

        <form className="z-form">
          <div className="z-form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>

          <input type="text" placeholder="Subject" required />

          <textarea placeholder="Your Message" rows="5" required />

          <button type="submit" className="z-send-btn">Send Message</button>
        </form>
      </section>

    </div>
  );
}

export default ContactUs;
