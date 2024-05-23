import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-item">
            <h2 className="footer-ul-title">Department</h2>
            <ul>
              <li>Home</li>
              <li>Men's Shop</li>
              <li>New Arrivals</li>
              <li>Latest News</li>
              <li>Customer Service</li>
            </ul>
          </div>
          <div className="footer-item">
            <h2 className="footer-ul-title">About us</h2>
            <ul>
              <li>Our Story</li>
              <li>Mission & Values</li>
              <li>Meet the Team</li>
              <li>Careers</li>
              <li>Press & Media</li>
            </ul>
          </div>
          <div className="footer-item">
            <h2 className="footer-ul-title">Services</h2>
            <ul>
              <li>Consultation</li>
              <li>Customization</li>
              <li>Support</li>
              <li>Training</li>
              <li>Maintenance</li>
            </ul>
          </div>
          <div className="footer-item">
            <h2 className="footer-ul-title">Help</h2>
            <ul>
              <li>FAQs</li>
              <li>Shipping & Delivery</li>
              <li>Returns & Exchanges</li>
              <li>Size Guide</li>
              <li>Customer Support</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-wrap">
            <p>&copy; 2024 All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
