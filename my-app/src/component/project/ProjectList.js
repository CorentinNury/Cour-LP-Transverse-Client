import React, { Component } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
const GET_PROJECTS = gql`
  {
    projects {
      id
      name
    }
  }
`;

function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <ul>
      {data.projects.map(item => (
        <li key={item.id} value={item.name}>
          {item.breed}
        </li>
      ))}
    </ul>
  );
}

class ProjetList extends Component {
    render() {
      return <h2>List of all Projet</h2>;
      return <div className="container"> 
        <h4>List of all projects.</h4>
        <Projects></Projects> 
      </div> ;
    }
}

export default ProjetList;