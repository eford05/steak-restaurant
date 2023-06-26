import React from "react";
import "./waitlist.css";

function Waitlist() {
  return (
    <main className="reserve">
      <h1 className="wait-title">Reserve Your Table</h1>
      <h2 className="wait-details">Contact Details</h2>
      <form action="" id="wait" className="wait-form">
        <input
          type="text"
          id="wait-fname"
          className="wait-input"
          placeholder="First Name*"
        />
        <input
          type="text"
          id="wait-lname"
          className="wait-input"
          placeholder="Last Name*"
        />
        <input
          type="tel"
          id="wait-tel"
          className="wait-input"
          placeholder="Phone Number*"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
        <p className="wait-tel-message">
          We will send you text when your table is available.
        </p>

        <input
          type="text"
          id="wait-email"
          className="wait-input"
          placeholder="Email*"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />

        <input
          type="text"
          id="wait-submit"
          className="wait-btn"
          value="Reserve"
        />
      </form>
    </main>
  );
}

export default Waitlist;
