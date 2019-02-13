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
    tasks: [],
    task: "",
    search: "",
    isHidden: false
  };

  componentDidMount = async () => {
    const tasks = await axios
      .get("https://to-do-list-server-exercice.herokuapp.com/")
      .then(response => response.data.tasks);

    this.setState({ tasks: tasks });
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    this.setState({ task: value });
  };

  handleAddClick = async () => {
    const newTask = this.state.task;
    const tasks = [...this.state.tasks];
    let isExist = false;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].task.toLowerCase() === newTask.toLowerCase()) {
        isExist = true;
      }
    }

    if (!isExist) {
      const createTask = await axios
        .post("https://to-do-list-server-exercice.herokuapp.com/create", {
          task: newTask
        })
        .then(response => response.date);
    }
    this.setState({ task: "" });
  };

  componentDidUpdate = async (prevProps, prevStates) => {
    const tasks = await axios
      .get("https://to-do-list-server-exercice.herokuapp.com/")
      .then(response => response.data.tasks);

    if (!this.state.search) {
      if (tasks !== this.state.tasks) {
        this.setState({ tasks: tasks });
      }
    }
  };

  handleClick = async task => {
    let newIsDone = task.isDone;

    newIsDone === true ? (newIsDone = false) : (newIsDone = true);
    const update = await axios
      .post("https://to-do-list-server-exercice.herokuapp.com/update", {
        id: task._id,
        isDone: newIsDone
      })
      .then(response => response.date);
  };

  handleDeleteClick = async task => {
    console.log(task);
    const update = await axios
      .post("https://to-do-list-server-exercice.herokuapp.com/delete", {
        id: task._id
      })
      .then(response => response.date);
  };

  handleChangeSearch = event => {
    const tasks = [...this.state.tasks];
    const target = event.target;
    const searched = target.value;
    let filtered = tasks;

    if (searched) {
      filtered = tasks.filter(task =>
        task.task.toLowerCase().includes(searched.toLowerCase())
      );
    }

    this.setState({ search: searched, tasks: filtered });
  };

  handleClickHidden = () => {
    let isHidden = this.state.isHidden;

    isHidden === true ? (isHidden = false) : (isHidden = true);

    this.setState({ isHidden: isHidden });
  };

  render() {
    return (
      <div className="page">
        <div className="container">
          <Header />
          <SearchBar
            onchange={this.handleChangeSearch}
            value={this.props.search}
          />

          <List
            tasks={this.state.tasks}
            onclick={this.handleClick}
            clickDelete={this.handleDeleteClick}
            isHidden={this.state.isHidden}
            clickHide={this.handleClickHidden}
          />
          <NewTask onchange={this.handleChange} value={this.state.task} />
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
