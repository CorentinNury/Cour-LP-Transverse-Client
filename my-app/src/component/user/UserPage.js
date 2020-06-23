import React, { Component } from 'react';
import UserCreate from './UserCreate';

class UserPage extends Component {
    render() {
      return (
        <div>
      <h2>Profile</h2>
     <button onClick={() => handleCreateNewUser(this.props)}>Register</button>
     
     </div>
      )
    }
}

function handleCreateNewUser(props) {
  props.history.push('/new-user')
}

function handleLoginUser(props) {
  props.history.push('/login')
}

export default UserPage;