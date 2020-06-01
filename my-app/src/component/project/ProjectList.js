import React, { Component } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
//npm install graphql-tag
//npm install @apollo/react-hooks

const GET_PROJECTS = gql`
  {
    projects {
      _id
      name
      tasks{
        name
      }
    }
  }
`;

function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <ul>
      {data.projects.map(item =>
        <li key={item._id} value={item.name} className="project-list-item">
          <h3>
            {item.name}
          </h3>
          <p>
            {item.tasks.length} tache(s) dans ce projet.
          </p>
        </li>
      )}
    </ul>
  );
}

class ProjetList extends Component {
  render() {
    return (
      <div className="container">
        <h4>List of all projects.</h4>
        <Projects />
      </div>
    );
  }
}

export default ProjetList;