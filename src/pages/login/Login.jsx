import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import "./login.css";

function Login() {
  return (
    <main className="login">
      <section className="create-profile">
        <div className="profile-container">
          <h2 className="profile-title">Create A Profile</h2>
          <p className="profile-desc">Make orders seamlessly:</p>
          <ul className="profile-list">
            <li className="profile-li">Manage your preferences</li>
            <li className="profile-li">Favorite Menu items</li>
            <li className="profile-li">Edit and Review your order history</li>
          </ul>
          <div className="login-btn-container">
            <button className="facebook-btn">
              <FaFacebookSquare className="square-icon" />
              <Link className="facebook-link">Login</Link>
            </button>
            <input
              type="submit"
              id="register"
              className="register-login"
              value="Register"
            />
          </div>
        </div>
      </section>
      <section className="login-profile">
        <div className="profile-container">
          <h2 className="profile-title">Log Into My Account</h2>
          <form action="" id="login" className="login-form">
            <div className="input-wrapper">
              <label htmlFor="email" className="input-label">
                Email Address*
              </label>
              <input type="email" id="email" className="email" />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password" className="input-label">
                Password*
              </label>
              <input type="password" id="password" className="password" />
            </div>
            <p className="forgot-pass">I forgot my password</p>

            <div className="checkbox">
              <input
                type="checkbox"
                id="remember-me"
                className="remember-me"
                value="Remember me"
              />
              <label htmlFor="remember-me" className="check-label">
                Remember me
              </label>
            </div>

            <div className="login-btn-container">
              <button className="facebook-btn">
                <FaFacebookSquare className="square-icon" />
                <Link className="facebook-link">Login</Link>
              </button>
              <input
                type="submit"
                id="login"
                className="register-login"
                value="Login"
              />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
