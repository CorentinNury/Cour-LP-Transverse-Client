import React, { Component } from "react";
import logo from "../../project.svg";
import { FiMenu } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

class HomePage extends React.Component {

  render() {
    return (
      <div className="header">
        <div>
          <FiMenu className="navbar-icon" />
        </div>
        <div className="title-with-logo">
          <img src={logo} className="app-logo" alt="logo" />
          <h2 className="header-title">Project App</h2>
        </div>
        <div>
          <FaRegUserCircle className="navbar-icon" />
        </div>
      </div>
    );
  }
}

export default HomePage;