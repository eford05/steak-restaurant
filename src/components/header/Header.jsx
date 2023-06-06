import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="hero">
      <figure className="hero-fig">
        <img
          className="hero-img"
          src={require("../../images/hitesh-dewasi-F-wom_-3mZY-unsplash.jpg")}
          alt="T-bone steak on a grill"
        />
      </figure>
      <div className="hero-slogan">
        <h2>Take a Break, Eat</h2>
        <h1>Steak</h1>
      </div>
      <div className="hero-btn-container">
        <button className="hero-btn">
          <Link to="/menu">Order Now</Link>
        </button>
      </div>
    </header>
  );
}

export default Header;
