import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./component/SearchBar";
import NewTask from "./component/NewTask";
import Header from "./component/Header";
import List from "./component/List";
import Button from "./component/Button";
import { fetchAllTodos } from "./actions/fetch_todos";
import { connect } from "react-redux";

class App extends Component {
  state = {
    search: "",
    isHidden: false
  };

  componentDidMount = async () => {
    this.props.updateTodos();
  };

  handleDeleteClick = async task => {
    await axios
      .post("https://to-do-list-server-exercice.herokuapp.com/delete", {
        id: task._id
      })
      .then(() => this.props.updateTodos());
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
    console.log("render", this.props.todos);
    return (
      <div className="page">
        <div className="container">
          <Header />
          <SearchBar
            onchange={this.handleChangeSearch}
            value={this.props.search}
          />

          <List
            tasks={this.props.todos}
            updateTodos={this.props.updateTodos}
            clickDelete={this.handleDeleteClick}
            isHidden={this.state.isHidden}
            clickHide={this.handleClickHidden}
          />
          <NewTask
            todos={this.props.todos}
            updateTodos={this.props.updateTodos}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};
const mapsDispatchtoProps = dispatch => {
  return { updateTodos: () => dispatch(fetchAllTodos()) };
};

App = connect(
  mapStateToProps,
  mapsDispatchtoProps
)(App);

export default App;
