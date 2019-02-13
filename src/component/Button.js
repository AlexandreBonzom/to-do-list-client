import React, { Component } from "react";

class Button extends React.Component {
  render() {
    return (
      <div className="button">
        {" "}
        <button className={this.props.name} onClick={this.props.onclick}>
          {this.props.label}
        </button>
      </div>
    );
  }
}

export default Button;
