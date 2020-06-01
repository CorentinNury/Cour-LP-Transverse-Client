import React, { Component } from "react";
import logo from "../../logo.svg";
import { FiMenu } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false
    };

    this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      navbarOpen: !this.state.navbarOpen
    });
  }
  render() {
    return (
      <div className="header">
        <div onClick={() => this.toggleNavbar()}>
          <FiMenu className="navbar-icon" />
        </div>
        
        <div>
          <FaRegUserCircle className="navbar-icon" />
        </div>
        <div>
          <FaRegUserCircle className="navbar-icon" />
        </div>
        {this.state.navbarOpen &&
          <div className="sidebar">
            <h2>Project APP</h2>
            <ul className="sidebar-list">
              <li>
                <Link onClick={() => this.toggleNavbar()} to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => this.toggleNavbar()} to="/me">
                  Profile
                </Link>
              </li>
              <li>
                <Link onClick={() => this.toggleNavbar()} to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link onClick={() => this.toggleNavbar()} to="/tasks">
                  Tasks
                </Link>
              </li>
            </ul>
          </div>}
      </div>
    );
  }
}

export default HomePage;