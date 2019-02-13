import React, { Component } from "react";

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.tasks.map(task => {
          if (task.isDone === false) {
            return (
              <li key={task._id}>
                <span onClick={() => this.props.clickDelete(task)}>
                  <i className="fas fa-minus-circle" />
                </span>
                <span onClick={() => this.props.onclick(task)} className="task">
                  {task.task}
                </span>
                <span>
                  <i className="far fa-square" />
                </span>
              </li>
            );
          } else {
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
    );
  }
}

export default List;
