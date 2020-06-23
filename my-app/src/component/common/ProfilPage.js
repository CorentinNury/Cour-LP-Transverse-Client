import React, { Component } from 'react';

class ProfilPage extends Component {
  render() {
    return (
      <div>
    <h2>Profile</h2>
   <button onClick={() => handleCreateNewUser()}>Register</button>
   </div>
    )
  }
}

function handleCreateNewUser(props) {
props.history.push('/new-user')
}


export default ProfilPage;