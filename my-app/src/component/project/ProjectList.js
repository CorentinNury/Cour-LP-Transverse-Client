import React from "react";
import gql from "graphql-tag";
import { useQuery,useMutation } from "@apollo/react-hooks";
import { IoIosClose } from "react-icons/io";
import { FaPlusSquare } from "react-icons/fa";
import {style } from "../../style/main.scss";
import { withRouter } from 'react-router-dom';


const GET_PROJECTS = gql`
  {
    projects {
      _id
      name
      tasks{
        _id
      }
    }
  }
`;


const DELETE_PROJECT = gql`
    mutation DeleteProject($id: ID!) {
    deleteProject(_id: $id)
  }
`;

function Projects(arg) {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  const  [deleteProject, {id} ]= useMutation(DELETE_PROJECT);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <ul>
      {data.projects.map(item =>
        <li key={item._id} value={item.name} className="project-list-item">
        
        <div>
        <button class="btn btn-primary" onClick={() => changeRoute(arg.props,("/project/" + item._id.toString()) )}><h3>{item.name}</h3></button>
        </div>
        
        <div className="project-item-detail">
          <p>{item.tasks.length} tasks in this project.</p>   
        </div>
         
        <div className="project-item-action">
            <IoIosClose onClick={() => deleteProject({ variables: { id: item._id } }) } fontSize="1.75em"/>
        </div>

        </li>
  )
      }
     

         <div className="project-item-detail">
         <button class="btn btn-primary" onClick={() => handleCreateNewProject(arg.props)}>
         <h3 class="display-5" >Create a new project</h3>
          </button>
        </div>
        
      
    </ul>
  );
}


function changeRoute(props, route) {
  props.history.push(route)
}

function handleCreateNewProject(props) {
  props.history.push('/new-project')
}



class ProjetList extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h3 class="display-5" >List of all projects</h3>
        <Projects props={this.props}/>
      </div>
    );
  }
}

export default withRouter(ProjetList);