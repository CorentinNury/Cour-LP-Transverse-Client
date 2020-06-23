import React, { Component } from "react";
import { useMutation } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";


const ADD_USER = gql`
  mutation CreateUserWithInput($input: UserInput!) {
    createUserWithInput(input: $input)
  {
    name
  }
  }
`;

function AddUser() {
    let name;
    let password;
   
    const [addUser, { data }] = useMutation(ADD_USER);
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            addUser({ variables: {
              input:{
                name: name.value, 
                password: password.value} 
              }  
            });
            
            name.value = '';
            password.value = '';
            
          }}
        >
        <p>Name User</p>
        <input
          ref={node => {
            name = node;
          }}
        />
        <p>Password User</p>
        <input
          ref={node => {
            password = node;
          }}
        />
        
        <div className="margin-v-m">

        <button type="submit" className="btn-primary">Create User</button>
        </div>
        </form>
      </div>
    );
  }

class UserPage extends Component {
  render() {
    console.log(this);
    return (
      <div className="container">
        <h4>Create a new User</h4>
        <AddUser />
      </div>
    );
  }
}

export default withRouter(UserPage);