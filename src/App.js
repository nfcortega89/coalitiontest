import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import BodyUpper from "./components/bodyUpper";
import Contact from "./components/contact";
import BodyLower from "./components/bodyLower";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BodyUpper />
        <Contact />
        <BodyLower />
      </div>
    );
  }
}

export default App;
