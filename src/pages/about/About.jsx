import React from "react";
import "./about.css";

function About() {
  return (
    <section className="about">
      <div className="about-wrapper">
        <h1 className="about-title">About my project</h1>
        <p className="about-desc">
          Thank you for visiting my first React project, I hope that you enjoyed
          it as much as I did creating it. This website was created using React,
          HTML, and CSS.
        </p>
        <p className="about-desc">
          I used react-router-dom (React Router 6.4) to route my pages. I used
          the Outlet element to route certain pages according to their layout.
          The home page for example, uses the Outlet element, it is nested
          between the Navbar component, the Header component, and the Footer
          component. The menu page on the other hand uses a layout that is
          nested only between the navbar and the footer component.
        </p>
        <p className="about-desc">
          The menu page uses the UseState hook to filter the categories of the
          menu items. I acheived this by setting the initial state of the
          categories as 1. I then created a toggle function called toggleCat,
          with a parameter of index to filter the categories by numbers starting
          from 1 to five, and setting the setActiveCat to the parameter of the
          index. Each list item that represents the categories has an onChange
          method with an arrow function passed to it that calls the toggleCat
          function and changes the index parameter according to the category
          selected.
        </p>
        <p className="about-desc">
          I used the state of activeCat (active category) to change the class
          name of the div. If the activeCat is equal to the number of the
          category set the class name to "active cat" else "cat". When the
          category is active it is displayed, if it is not then using CSS it is
          hidden with a property of display: none.
        </p>
        <p className="about-desc">
          This was a simple project to test my understanding of React and web
          development so far. I am just learning, but I hope to broaden my
          understanding of React, improve the architecture of my code, and
          someday learn to encorporate the backend. I know that I have a ways to
          go, but I am enthusiastic about the journey ahead. Thank you again,
          for taking the time to visit my project, and viewing my first step on
          this adventure.
        </p>
        <p className="about-desc">Erica Ford</p>
      </div>
    </section>
  );
}

export default About;
