import React, { Component } from "react";
import { FiMenu } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { withRouter,Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import Navbar from "./Navbar";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false
    };

    this.toggleNavbar.bind(this);
    this.handleClick.bind(this);
  }

  toggleNavbar() {
    this.setState({
      navbarOpen: !this.state.navbarOpen
    });
  }
  handleClick(){
    this.props.history.push("/home")
  }
  render() {
    return (
      <div className="header">        
        {
        this.state.navbarOpen &&
          <div className="sidebar">
             <IoIosClose onClick={() => this.toggleNavbar()} fontSize="1.75em"/>
            <h2>Menu</h2>
            <ul className="sidebar-list">
              <li>
                <Link class="btn btn-primary btn-lg" onClick={() => this.toggleNavbar()} to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link class="btn btn-primary btn-lg" onClick={() => this.toggleNavbar()} to="/me">
                  Profile
                </Link>
              </li>
              <li>
                <Link class="btn btn-primary btn-lg" onClick={() => this.toggleNavbar()} to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link class="btn btn-primary btn-lg" onClick={() => this.toggleNavbar()} to="/tasks">
                  Tasks
                </Link>
              </li>
            </ul>
          </div>
          }
      </div>
    );
  }
}

export default HomePage;