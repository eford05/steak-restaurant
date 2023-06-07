import React from "react";
import "./featurecard.css";
import { Link } from "react-router-dom";

function FeatureCard({ tagline, image, btnTitle, path }) {
  return (
    <div className="feature-card">
      <h2 className="tagline">{tagline}</h2>
      <figure className="feature-fig">
        <img className="feature-img" src={image} alt="Steak" />
      </figure>
      <button className="feature-btn">
        <Link to={path}>{btnTitle}</Link>
      </button>
    </div>
  );
}

export default FeatureCard;
