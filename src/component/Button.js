import React, { Component } from "react";

class Button extends React.Component {
  render() {
    return (
      <div className="button">
        {" "}
        <button onClick={this.props.onclick}>Ajouter une tâche</button>
      </div>
    );
  }
}

export default Button;
