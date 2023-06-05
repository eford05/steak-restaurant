import React from "react";
import { NavLink, Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "./navbar.css";

function Navbar() {
  return (
    <NavLink className="navbar">
      <div className="logo-container">
        <figure className="logo-fig">
          <img
            className="logo"
            src={require("../../images/longhorn-kittl.png")}
            alt="Longhorn Logo"
          />
        </figure>
        <h2 className="logo-title">
          <Link to="/">Steakhouse</Link>
        </h2>
      </div>
      <ul className="nav-list">
        <li>
          <Link className="nav-link" to="/menu">
            Order Now
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/wait">
            Join Waitlist
          </Link>
        </li>
      </ul>
      <div className="contact-info">
        <Link className="contact-link">
          <p className="address-link">United States</p>
          <p className="address-link">(000)000-0000</p>
        </Link>
      </div>
      <ul className="login-container">
        <li className="li-login">
          <Link className="nav-link" to="/login">
            Log In
          </Link>
        </li>
        <li>
          <HiOutlineShoppingBag className="shop-icon" />
        </li>
      </ul>
    </NavLink>
  );
}

export default Navbar;
