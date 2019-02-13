import React, { Component } from "react";

class Button extends React.Component {
  renderButton = isHidden => {
    if (isHidden) {
      return (
        <div className="show-hidden">
          <i class="fas fa-eye" />
          <span>Montrer les tâches effectuées</span>
        </div>
      );
    } else {
      return (
        <div className="hide-done">
          <i class="fas fa-eye-slash" />
          <span>Cacher les tâche effectuées</span>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="button">
        {" "}
        <button className={this.props.name} onClick={this.props.clickHide}>
          {this.renderButton(this.props.isHidden)}
        </button>
      </div>
    );
  }
}

export default Button;
