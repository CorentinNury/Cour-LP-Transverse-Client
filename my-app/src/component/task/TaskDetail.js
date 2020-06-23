import React, { Component } from "react";
import { useQuery,useMutation } from "@apollo/react-hooks";
import { IoIosClose, IoMdCheckmark } from "react-icons/io";
import { FaPlusSquare } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";

const GET_TASK = gql`
  query Tasks($id: ID!) {
      task(_id: $id) {
        _id
        name
        description
        duration
        priority    
        }
      }
`;


function Task({ arg, id }) {
  const { loading, error, data } = useQuery(GET_TASK, {
    variables: { id }
  });


  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const task = data.task;
 
  return (
    <div>
      <h2>Detail of task</h2>
      
      <p>Name: {task.name}</p>
      <p>Description: {task.description}</p>
      <p>Duration: {task.duration}</p>
      <p>Priority: {task.priority}</p>

    </div>
    
  );
}


class TaskDetail extends Component {
  render() {
    console.log(this);
    return (
      <div className="container">
        <Task arg={this.props} id={this.props.match.params.id} />
      </div>
    );
  }
}

export default withRouter(TaskDetail);