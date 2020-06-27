import React, { Component } from "react";
import { useMutation,useQuery } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";


const ADD_TASK = gql`
  mutation addTaskToProjects($project: ID!, $input: TaskInput!) {
    addTaskToProjects(_id: $project, input: $input)
  }
`;
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

function AddTask() {
  let name;
  let description;
  let duration;
  let priority;
  let project;
  const { loading,error,data } = useQuery(GET_PROJECTS);
  const [addTask, { variables }] = useMutation(ADD_TASK);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTask({ 
           
           
            variables: { 
              input: {
            name: name.value,
            description: description.value,
            duration: duration.value,
            priority: priority.value
            },
             project: project.value
              }});
          name.value = '';
          description.value = '';
          duration.value = '';
          priority.value = '';
          project.value= '';
        }}
      >
      <p>Task name</p>
      <input  class="form-control"
        ref={node => {
          name = node;
        }}
      />
      <p>Description</p>
      <input class="form-control"
        ref={node => {
          description = node;
        }}
      />
      <p>Lenght</p>
      <input  class="form-control"
        ref={node => {
          duration = node;
        }}
      />
       <p>Priority</p>
      <input  class="form-control"
        ref={node => {
          priority = node;
        }}
      />
      <div>
    <select  class="form-control" name="project" id="project-select" ref={node => {
          project = node;
        }}>
    <option value="">Choose a Project</option>
    
    {data.projects.map(item =>
    <option value={item._id} >{item.name}</option> 
    )}
</select>
</div>
      <div className="margin-v-m">

      <button type="submit" class="btn btn-primary btn-lg">Add</button>
      </div>
      </form>
    </div>
  );
}

class TaskDetail extends Component {
  render() {
    
    return (
      <div className="container">
        <AddTask/>
      </div>
    );
  }
}

export default withRouter(TaskDetail);