import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <ul className="footer-list">
        <li className="footer-li">
          <Link className="footer-link" to="/">
            About
          </Link>
        </li>
        <li className="footer-li">
          <Link className="footer-link" to="/menu">
            Menu
          </Link>
        </li>
        <li className="footer-li">
          <Link className="footer-link" to="/login">
            Register
          </Link>
        </li>
        <li className="footer-li">
          <Link className="footer-link" to="/login">
            Join the Club
          </Link>
        </li>
      </ul>
      <div className="footer-social">
        <div className="social-icons">
          <h3 className="social-desc">Stay in Touch</h3>
          <ul className="social-list">
            <li>
              <div className="social-icon-container">
                <FaFacebookF className="social-icon" />
              </div>
            </li>
            <li>
              <div className="social-icon-container">
                <FaTwitter className="social-icon" />
              </div>
            </li>
            <li>
              <div className="social-icon-container">
                <FaInstagram className="social-icon" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
