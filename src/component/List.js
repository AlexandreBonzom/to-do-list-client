import React from "react";
import ButtonHidden from "./ButtonHidden";
import PropTypes from "prop-types";

const List = ({
  search,
  todos,
  onlyRemainingTasks,
  clickDelete,
  clickHide,
  toggleTask
}) => {
  const visibleTodos = (todos, onlyRemainingTasks, search) => {
    const filteredTodos = todos.filter(todo => {
      return todo.task.toLowerCase().includes(search.toLowerCase());
    });
    if (onlyRemainingTasks) {
      const newTodos = filteredTodos.filter(todo => {
        return !todo.isDone;
      });
      return newTodos;
    }
    return filteredTodos;
  };

  return (
    <div className="list-container">
      <ul>
        {visibleTodos(todos, onlyRemainingTasks, search).map(task => {
          return (
            <li key={task._id}>
              <span onClick={() => clickDelete(task)}>
                <i className="fas fa-minus-circle" />
              </span>
              <span className={!task.isDone ? "task" : "strike task"}>
                {task.task}
              </span>
              <span onClick={() => toggleTask(task)}>
                <i
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
        clickHide={clickHide}
        onlyRemainingTasks={onlyRemainingTasks}
      />
    </div>
  );
};
List.propTypes = {
  search: PropTypes.string,
  todos: PropTypes.array.isRequired,
  onlyRemainingTasks: PropTypes.bool.isRequired,
  clickDelete: PropTypes.func,
  clickHide: PropTypes.func,
  toggleTask: PropTypes.func
};

export default List;
