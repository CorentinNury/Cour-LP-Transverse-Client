import React, { Component } from 'react';


class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navbarOpen: false
    }

    this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      navbarOpen: !this.state.navbarOpen
    })

  }
  render() {
    console.log(this.state)
      return (
        <div className="container">
        <h3>HomePage</h3>
        <p>Now we have:</p>
        <ul>
          <li>A server with GraphQL enable</li>
          <li>A client that wait to get data</li>
        </ul>
        <p>Next step, will be to add graphql on the client side.</p>
        <p>We gonna build some queries, that will be sent to the server</p>
        <p>Queries:</p>
        <ul>
          <li><strong>GetUserInformation</strong>: get user datas by id</li>
          <li><strong>GetProjectsList</strong>: get all the projects (by user)</li>
          <li><strong>GetProject</strong>: get a project by id</li>
          <li><strong>GetTasksList</strong>: get all the tasks by project</li>
          <li><strong>GetTask</strong>: get a task by id</li>
        </ul>
      </div>
    
    );
  }
}

export default HomePage;