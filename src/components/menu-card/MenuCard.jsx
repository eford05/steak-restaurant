import React from "react";
import "./menucard.css";
import { GiMeat, GiFlatfish } from "react-icons/gi";
import { LuVegan } from "react-icons/lu";

function MenuCard({ img, title, price, icon }) {
  return (
    <section className="menu-card">
      <figure className="menu-fig">
        <img src={img} alt={title} className="menu-img" />
      </figure>
      <div className="menu-content">
        <h3 className="menu-title">{title}</h3>
        <p className="menu-price">{`$${price}`}</p>
        <div className="menu-icon-btn">
          <div className="menu-icon">
            {icon === "meat" ? <GiMeat className="menu-icon red" /> : ""}
            {icon === "fish" ? <GiFlatfish className="menu-icon blue" /> : ""}
            {icon === "veg" ? <LuVegan className="menu-icon green" /> : ""}
          </div>
          <button className="menu-btn">Add</button>
        </div>
      </div>
    </section>
  );
}

export default MenuCard;
