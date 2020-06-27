import React, { Component } from "react";
import { useMutation } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";


const LOGIN_USER = gql`
  mutation Login($name: String! $password: String!){
    login(name:$name, password:$password)
  {
    name
  }
  }
`;

function LoginUser(args) {
    let name;
    let password;
   
    const [loginUser, { data }] = useMutation(LOGIN_USER);
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            loginUser({ variables: {
                name: name.value, 
                password: password.value} 
            }
            ).then(() => {
              args.props.history.push("/projects");
          })

            name.value = '';
            password.value = '';

          }}
        >
        <p>Name User</p>
        <input class="form-control"
          ref={node => {
            name = node;
          }}
        />
        <p>Password User</p>
        <input class="form-control"
          ref={node => {
            password = node;
          }}type="password"
        />
        
        <div className="margin-v-m">

        <button type="submit" class="btn btn-primary btn-lg">Login</button>
        </div>
        </form>
      </div>
    );
  }

class UserPage extends Component {
  render() {
    
    return (
      <div className="container">
        <h4>Login User</h4>
        <LoginUser props={this.props}/>
      </div>
    );
  }
}

export default withRouter(UserPage);