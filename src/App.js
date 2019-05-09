import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./component/SearchBar";
import NewTask from "./component/NewTask";
import Header from "./component/Header";
import List from "./component/List";
import Button from "./component/Button";

class App extends Component {
  state = {
    todos: [],
    newTask: "",
    search: "",
    onlyRemainingTasks: false
  };

  componentDidMount = async () => {
    this.updateList();
  };

  updateList = () => {
    axios
      .get("https://to-do-list-server-exercice.herokuapp.com/")
      .then(response => response.data.tasks, error => console.log(error))
      .then(todos => this.setState({ todos: todos }));
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddClick = async () => {
    const { newTask } = this.state;
    const todos = [...this.state.todos].map(todo => todo.task.toLowerCase());

    if (!todos.filter(task => task === newTask.toLowerCase()).length) {
      axios
        .post("https://to-do-list-server-exercice.herokuapp.com/create", {
          task: newTask
        })
        .then(() => this.updateList(), error => console.log(error))
        .then(() => this.setState({ newTask: "" }));
    }
  };

  handleClickOnElement = task => {
    axios
      .post("https://to-do-list-server-exercice.herokuapp.com/update", {
        id: task._id,
        isDone: !task.isDone
      })
      .then(() => this.updateList(), error => console.log(error));
  };

  handleDeleteClick = task => {
    axios
      .post("https://to-do-list-server-exercice.herokuapp.com/delete", {
        id: task._id
      })
      .then(() => this.updateList(), error => console.log(error));
  };

  handleClickSeeOnlyRemainingTask = () => {
    const { onlyRemainingTasks } = this.state;
    this.setState({ onlyRemainingTasks: !onlyRemainingTasks });
  };

  render() {
    return (
      <div className="page">
        <div className="container">
          <Header />
          <SearchBar
            handleInputChange={this.handleInputChange}
            value={this.state.search}
          />

          <List
            {...this.state}
            toggleTask={this.handleClickOnElement}
            clickDelete={this.handleDeleteClick}
            clickHide={this.handleClickSeeOnlyRemainingTask}
          />
          <NewTask
            handleInputChange={this.handleInputChange}
            value={this.state.newTask}
          />
          <Button
            addTodo={this.handleAddClick}
            label="ajoute une tâche"
            name="add-task"
          />
        </div>
      </div>
    );
  }
}

export default App;
