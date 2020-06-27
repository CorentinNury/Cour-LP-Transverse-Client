import React, { Component } from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
const GET_GRAPHQL_INFO = gql`
  {
    userSchemaAssert
  }
`;

function CheckConfig() {
  const { loading, error, data, networkStatus } = useQuery(GET_GRAPHQL_INFO);

  if (loading) return <span className="status-warning">LOADING</span>;
  if (error) return <span className="status-error">ERROR</span>;
  return <span className="status-ok">OK</span>;
}
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
   
      return (
        <div className="container">
        <h3>HomePage</h3>
        <p>Database: Mongo db</p>
        <p>API: <button><a href="http://localhost:4000/" style={{color:"lightseagreen"}}>graphql</a></button></p>
        <p>Icon: react-icon</p>
      </div>
    
    );
  }
}

export default HomePage;