import React, { Component } from "react";
import "../header.css";

class Header extends Component {
  render() {
    return (
      <section className="header">
        <div className="headerWrapper">
          <div className="headerSpans">
            <span>Call us now!</span>
            <span>385.154.11.28.35</span>
          </div>
          <div className="login-links">
            <a>Login</a>
            <a>signup</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
