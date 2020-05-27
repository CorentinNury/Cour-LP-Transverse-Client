import React, { Component } from "react";

import { Link } from "react-router-dom";

class Navbar extends React.Component {

  render() {
    return (
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/me">Profile</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;