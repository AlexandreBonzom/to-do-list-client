import React, { Component } from "react";
import ButtonHidden from "./ButtonHidden";

class List extends Component {
  render() {
    return (
      <div className="list-container">
        <ul>
          {this.props.tasks.map(task => {
            if (task.isDone === false) {
              return (
                <li key={task._id}>
                  <span onClick={() => this.props.clickDelete(task)}>
                    <i className="fas fa-minus-circle" />
                  </span>
                  <span
                    onClick={() => this.props.onclick(task)}
                    className="task"
                  >
                    {task.task}
                  </span>
                  <span>
                    <i className="far fa-square" />
                  </span>
                </li>
              );
            } else if (!this.props.isHidden) {
              return (
                <li key={task._id} onClick={() => this.props.onclick(task)}>
                  <span onClick={() => this.props.clickDelete(task)}>
                    <i className="fas fa-minus-circle" />
                  </span>
                  <span
                    className="strike task"
                    onClick={() => this.props.onclick(task)}
                  >
                    {task.task}
                  </span>
                  <span>
                    <i className="far fa-check-square" />
                  </span>
                </li>
              );
            }
          })}
        </ul>
        <ButtonHidden
          name="hidden-button"
          clickHide={this.props.clickHide}
          isHidden={this.props.isHidden}
        />
      </div>
    );
  }
}

export default List;
