import React, { Component } from "react";
import ButtonHidden from "./ButtonHidden";

class List extends Component {
  visibleTodos = (todos, isHidden) => {
    if (isHidden) {
      const newTodos = todos.filter(todo => {
        return !todo.isDone;
      });
      return newTodos;
    }
    return todos;
  };

  render() {
    return (
      <div className="list-container">
        <ul>
          {this.visibleTodos(this.props.todos, this.props.isHidden).map(
            task => {
              return (
                <li key={task._id}>
                  <span onClick={() => this.props.clickDelete(task)}>
                    <i className="fas fa-minus-circle" />
                  </span>
                  <span
                    onClick={() => this.props.onclick(task)}
                    className={!task.isDone ? "task" : "strike task"}
                  >
                    {task.task}
                  </span>
                  <span>
                    <i
                      className={
                        !task.isDone ? "far fa-square" : "far fa-check-square"
                      }
                    />
                  </span>
                </li>
              );
            }
          )}
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
