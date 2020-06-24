import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./component/common/Home";
import UserPage from "./component/user/UserPage";
import ProfilPage from "./component/common/ProfilPage";
import TaskList from "./component/task/TaskList";
import TaskDetail from "./component/task/TaskDetail";
import ProjectList from "./component/project/ProjectList";
import ProjectDetail from "./component/project/ProjectDetail";
import ProjectCreate from "./component/project/ProjectCreate";
import Header from "./component/common/Header";
import Navbar from "./component/common/Navbar";
import UserCreate from "./component/user/UserCreate";
import UserLogin from "./component/user/UserLogin";
import TaskCreate from "./component/task/TaskCreate";

function App() {
  return (
    <div className="App">   
    <Header/>   
    <Navbar/>

      <Switch className="flex-1">
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/me">
          <ProfilPage />
        </Route>
        <Route path="/user/:id">
          <UserPage />
        </Route>
        <Route path="/tasks">
          <TaskList />
        </Route>
        <Route path="/task/:id">
          <TaskDetail />
        </Route>
        <Route path="/projects/">
          <ProjectList />
        </Route>
        <Route path="/project/:id">
          <ProjectDetail />
        </Route>
        <Route path="/new-project">
            <ProjectCreate />
        </Route>
        <Route path="/new-user">
            <UserCreate />
        </Route>
        <Route path="/login">
            <UserLogin />
        </Route>
        <Route path="/create/task">
            <TaskCreate />
        </Route>
      </Switch>
    </div>
  );
}

export default App;