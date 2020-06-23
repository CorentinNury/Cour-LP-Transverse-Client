import React, { Component } from 'react';

class ProfilPage extends Component {
  render() {
    return (
      <div className="container">
    <h3 class="display-5" >Profile</h3>
   <button class="btn btn-primary btn-lg" onClick={() => handleCreateNewUser()}>Register</button>
   </div>
    )
  }
}

function handleCreateNewUser(props) {
props.history.push('/new-user')
}


export default ProfilPage;