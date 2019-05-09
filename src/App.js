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
    isHidden: false
  };

  componentDidMount = async () => {
    this.updateList();
  };

  updateList = () => {
    axios
      .get("https://to-do-list-server-exercice.herokuapp.com/")
      .then(response => response.data.tasks)
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
        .then(() => this.updateList())
        .then(() => this.setState({ newTask: "" }));
    }
  };

  handleClickOnElement = task => {
    axios
      .post("https://to-do-list-server-exercice.herokuapp.com/update", {
        id: task._id,
        isDone: !task.isDone
      })
      .then(() => this.updateList());
  };

  handleDeleteClick = task => {
    axios
      .post("https://to-do-list-server-exercice.herokuapp.com/delete", {
        id: task._id
      })
      .then(() => this.updateList());
  };

  handleChangeSearch = event => {
    const todos = [...this.state.todos];
    const target = event.target;
    const searched = target.value;
    let filtered = todos;

    if (searched) {
      filtered = todos.filter(task =>
        task.task.toLowerCase().includes(searched.toLowerCase())
      );
    }

    this.setState({ search: searched, todos: filtered });
  };

  handleClickHidden = () => {
    const { isHidden } = this.state;
    this.setState({ isHidden: !isHidden });
  };

  render() {
    console.log(this.state);
    return (
      <div className="page">
        <div className="container">
          <Header />
          <SearchBar
            onchange={this.handleChangeSearch}
            value={this.props.search}
          />

          <List
            todos={this.state.todos}
            onclick={this.handleClickOnElement}
            clickDelete={this.handleDeleteClick}
            isHidden={this.state.isHidden}
            clickHide={this.handleClickHidden}
          />
          <NewTask onchange={this.handleInputChange} name={this.state.task} />
          <Button
            onclick={this.handleAddClick}
            label="ajoute une tâche"
            name="add-task"
          />
        </div>
      </div>
    );
  }
}

export default App;
