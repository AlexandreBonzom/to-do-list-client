import React, { Component } from "react";

class NewTask extends React.Component {
  render() {
    return (
      <div className="newTask">
        <input
          type="text"
          value={this.props.value}
          placeholder="Entrez une nouvelle tâche"
          onChange={this.props.onchange}
        />
      </div>
    );
  }
}

export default NewTask;
