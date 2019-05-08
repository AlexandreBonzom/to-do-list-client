import React, { Component } from "react";
import axios from "axios";
class NewTask extends Component {
  state = { newTask: "" };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { newTask } = this.state;
    if (!this.props.todos.includes(newTask)) {
      await axios
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

export default NewTask;
