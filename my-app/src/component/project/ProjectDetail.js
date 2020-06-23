import React, { Component } from "react";
import { useQuery,useMutation } from "@apollo/react-hooks";
import { IoIosClose, IoMdCheckmark } from "react-icons/io";
import { FaPlusSquare } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";

const GET_PROJECT = gql`
  query Projects($id: ID!) {
    project(_id: $id) {
      _id
      name
      description
      tasks {
        _id
        name
        description
      }
    }
  }
`;

const DELETE_TASK = gql`
    mutation deleteTask($idTask: ID!) {
    deleteTask(_id: $idTask)
  }
`;

function Project({ arg, id }) {
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id }
  });
  const  [deleteTask, idTask ]= useMutation(DELETE_TASK);



  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const project = data.project;
 
  return (
    
    <div>
      <h2>Detail projet</h2>
      <p>
       Nom Projet: {project.name}
      </p>
      <p>
        Description: {project.description}
      </p>
      <h3>Detail Tache</h3>
      {project.tasks != null &&
      <ul>
        {project.tasks.map(item =>
          <li key={item._id} value={item.name} className="project-list-item" onClick={() => changeRoute(arg, ("/task/" + item._id.toString()))}>
            <div className="project-item-detail">
              <h3>
                {item.name}
              </h3>
              <p>
                {item.description}
              </p>
            </div>
            <div className="project-item-action">
              <IoIosClose
                fontSize="1.75em"
                color="tomato"
                onClick={() => deleteTask({ variables: { idTask: item._id } })}
              />
              
            </div>
          </li>
        )}
        <li className="project-list-item" onClick={() => changeRoute(arg,"/create/task")}>
          <div
            className="project-item-action"
            style={{
              padding: "1em"
            }}
          >
            <FaPlusSquare fontSize="1.5em" />
          </div>
          <div className="project-item-detail">
            <h3>Add new task</h3>
          </div>
        </li>
      </ul>
}
{project.tasks <=0 &&
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <img
            width="10%"
            alt="Not found"
            src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/no_data_qbuo.svg"
          />
          <h4>This project did not contain any task.</h4>
        </div>
        }
    </div>
  );
}

function changeRoute(props, route) {
  console.log(props, route);
  props.history.push(route);
}

class ProjetDetail extends Component {
  render() {
    console.log(this);
    return (
      <div className="container">
        <Project arg={this.props} id={this.props.match.params.id} />
      </div>
    );
  }
}

export default withRouter(ProjetDetail);