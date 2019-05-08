import React, { Component } from "react";
import ButtonHidden from "./ButtonHidden";
import axios from "axios";

const List = props => {
  const handleClickOnElement = task => {
    axios
      .post("https://to-do-list-server-exercice.herokuapp.com/update", {
        id: task._id,
        isDone: !task.isDone
      })
      .then(() => props.updateTodos());
  };

  const handleDeleteClick = task => {
    axios
      .post("https://to-do-list-server-exercice.herokuapp.com/delete", {
        id: task._id
      })
      .then(() => this.props.updateTodos());
  };
  return (
    <div className="list-container">
      <ul>
        {props.tasks.map(task => {
          return (
            <li key={task._id}>
              <span onClick={() => handleDeleteClick(task)}>
                <i className="fas fa-minus-circle" />
              </span>
              <span className={!task.isDone ? "task" : "strike task"}>
                {task.task}
              </span>
              <span>
                <i
                  onClick={() => handleClickOnElement(task)}
                  className={
                    !task.isDone ? "far fa-square" : "far fa-check-square"
                  }
                />
              </span>
            </li>
          );
        })}
      </ul>
      <ButtonHidden
        name="hidden-button"
        clickHide={props.clickHide}
        isHidden={props.isHidden}
      />
    </div>
  );
};

export default List;
