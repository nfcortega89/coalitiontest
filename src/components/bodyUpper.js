import React, { Component } from "react";
import "../bodyUpper.css";

class BodyUpper extends Component {
  render() {
    return (
      <section className="bodyUpper">
        <div className="logo">
          <h1>YOUR</h1>
          <h1>LOGO</h1>
        </div>
        <nav>
          <ul className="secondaryLinks">
            <li>Title1</li>
            <li>Title2</li>
            <li>Title3</li>
            <li>Title4</li>
            <li>Title5</li>
            <li>Title6</li>
            <li>Title7</li>
          </ul>
        </nav>
        <div className="submenu1">
          <ul>
            <li>Submenu 1</li>
            <li>Submenu 2</li>
            <li>Submenu 3</li>
          </ul>
        </div>
        <div className="submenu2">
          <ul>
            <li>Submenu 1</li>
            <li>Submenu 2</li>
            <li>Submenu 3</li>
          </ul>
        </div>
      </section>
    );
  }
}

export default BodyUpper;
