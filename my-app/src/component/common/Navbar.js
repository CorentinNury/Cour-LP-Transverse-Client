import React, { Component } from "react";
import { FaRegUserCircle, FaHome, FaProjectDiagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";


class Navbar extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} className="app-logo" alt="logo" />
        <a className="navbar-brand" href="#home">Only fan</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item active">
              <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
            </li>
      
            <li className="nav-item">
              <Link className="nav-link" to="/new-user">Register</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>

      
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>

    </ul>
  </div>
</nav>

    );
  }
}

export default Navbar;