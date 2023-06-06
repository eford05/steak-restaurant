import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineShoppingBag,
  HiOutlineMenuAlt1,
  HiOutlineX,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import "./navbar.css";

function Navbar() {
  const [navActive, setNavActive] = useState(true);
  return (
    <nav className="navbar">
      <button className="toggle" onClick={() => setNavActive(!navActive)}>
        {navActive ? (
          <HiOutlineMenuAlt1 className="toggle-icon" />
        ) : (
          <HiOutlineX className="toggle-icon" />
        )}
      </button>
      <div className="logo-container">
        <figure className="logo-fig">
          <NavLink to="/">
            <img
              className="logo"
              src={require("../../images/longhorn-kittl.png")}
              alt="Longhorn Logo"
            />
          </NavLink>
        </figure>
        <h2 className="logo-title">
          <NavLink to="/">Steakhouse</NavLink>
        </h2>
      </div>
      <ul className={!navActive ? "nav-list-active" : "nav-list"}>
        <li>
          <NavLink className="nav-link" to="/menu">
            Order Now
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/wait">
            Join Waitlist
          </NavLink>
        </li>
      </ul>
      <div className="contact-info">
        <NavLink className="contact-link">
          <p className="address-link">United States</p>
          <p className="address-link">(000)000-0000</p>
        </NavLink>
      </div>
      <ul className="login-container">
        <li>
          <HiOutlineLocationMarker className="link-marker" />
        </li>
        <li className="li-login">
          <NavLink className="nav-link" to="/login">
            Log In
          </NavLink>
        </li>
        <li className="shop-li">
          <HiOutlineShoppingBag className="shop-icon" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
