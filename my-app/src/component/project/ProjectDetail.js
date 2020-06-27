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
      <h2>{project.name}</h2>
      <p>
        Description: {project.description}
      </p>
      <h3>Task</h3>
      {project.tasks != null &&
      <ul>
        {project.tasks.map(item => 
          
          <li key={item._id} value={item.name} className="project-list-item">
            
            <div>
              <button class="btn btn-primary" onClick={() => changeRoute(arg, ("/task/" + item._id.toString()))}> <h3>{item.name}</h3></button>
            </div>

            <div className="project-item-detail">
        </div>

            <div className="project-item-action">
              <IoIosClose fontSize="1.75em" color="tomato" onClick={() => deleteTask({ variables: { idTask: item._id } })}/>
            </div>
          </li>
        )
        }
      </ul>
}
{project.tasks <=0 &&
  <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }} >
    <img width="10%" alt="Not found" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/no_data_qbuo.svg"/>
    <h4>This project did not contain any task.</h4>
</div>
}
<div className="project-item-detail">
  <button class="btn btn-primary"  onClick={() => changeRoute(arg,"/create/task")}>
    <h3 class="display-5" >Add new task</h3>
  </button>
</div>
    </div>
  );
} 

function changeRoute(props, route) {
  
  props.history.push(route);
}

class ProjetDetail extends Component {
  render() {
    
    return (
      <div className="container">
        <Project arg={this.props} id={this.props.match.params.id} />
      </div>
    );
  }
}

export default withRouter(ProjetDetail);