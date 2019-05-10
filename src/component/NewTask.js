import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { fetchAllTodos } from "../actions/fetch_todos";

class NewTask extends Component {
  state = { newTask: "" };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { newTask } = this.state;
    if (
      !this.props.todos.filter(todo =>
        todo.task.toLowerCase().includes(newTask.toLowerCase())
      ).length
    ) {
      axios
        .post("https://to-do-list-server-exercice.herokuapp.com/create", {
          task: newTask
        })
        .then(() => this.props.updateTodos())
        .then(() => this.setState({ newTask: "" }));
    }
  };

  render() {
    return (
      <form>
        <div className="newTask">
          <input
            name="newTask"
            type="text"
            value={this.state.newTask}
            placeholder="Entrez une nouvelle tâche"
            onChange={this.handleChange}
          />
        </div>
        <div className="button">
          <button onClick={this.handleSubmit}>
            ajoutez une nouvelle tâche
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos };
};
const mapsDispatchtoProps = dispatch => {
  return { updateTodos: () => dispatch(fetchAllTodos()) };
};

const NewTaskContainer = connect(
  mapStateToProps,
  mapsDispatchtoProps
)(NewTask);

export default NewTaskContainer;
