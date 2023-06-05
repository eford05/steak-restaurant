import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
    <NavLink className="navbar">
      <button className="toggle" onClick={() => setNavActive(!navActive)}>
        {navActive ? (
          <HiOutlineMenuAlt1 className="toggle-icon" />
        ) : (
          <HiOutlineX className="toggle-icon" />
        )}
      </button>
      <div className="logo-container">
        <figure className="logo-fig">
          <Link to="/">
            <img
              className="logo"
              src={require("../../images/longhorn-kittl.png")}
              alt="Longhorn Logo"
            />
          </Link>
        </figure>
        <h2 className="logo-title">
          <Link to="/">Steakhouse</Link>
        </h2>
      </div>
      <ul className={!navActive ? "nav-list-active" : "nav-list"}>
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
        <li>
          <HiOutlineLocationMarker className="link-marker" />
        </li>
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
