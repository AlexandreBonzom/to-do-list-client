import React from "react";
import ButtonHidden from "./ButtonHidden";
import axios from "axios";

import { connect } from "react-redux";
import { remainingTaskFilter } from "../actions/set_filters";
import { fetchAllTodos } from "../actions/fetch_todos";

const List = props => {
  const visibleTodos = (todos, search, onlyRemainingTasks) => {
    let newTodos = todos.filter(todo =>
      todo.task.toLowerCase().includes(search.toLowerCase())
    );
    if (onlyRemainingTasks) {
      newTodos = newTodos.filter(todo => todo.isDone !== onlyRemainingTasks);
    }
    return newTodos;
  };

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
      .then(() => props.updateTodos());
  };

  return (
    <div className="list-container">
      <ul>
        {visibleTodos(
          props.todos,
          props.setFilters.search,
          props.setFilters.onlyRemainingTasks
        ).map(task => {
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
        clickHide={props.remainingTaskFilter}
        onlyRemainingTasks={props.setFilters.onlyRemainingTasks}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { setFilters: state.setFilters, todos: state.todos };
};

const mapDispatchToProps = dispatch => {
  return {
    remainingTaskFilter: () => dispatch(remainingTaskFilter()),
    updateTodos: () => dispatch(fetchAllTodos())
  };
};

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ListContainer;
