import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "./offers.css";

function Offers({ img, alt, title, desc, path, link }) {
  return (
    <div className="offer-card">
      <figure className="offer-fig">
        <img
          className="offer-img"
          src={require(`../../images/${img}`)}
          alt={alt}
        />
      </figure>
      <h2 className="offer-title">{title}</h2>
      <p className="offer-desc">{desc}</p>
      <Link className="offer-link" to={path}>
        {link}
        <FiArrowRight className="offer-arrow" />
      </Link>
    </div>
  );
}

export default Offers;
