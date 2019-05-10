import React from "react";

const ButtonVisibleTodos = ({ clickHide, onlyRemainingTasks, name }) => {
  const renderButton = onlyRemainingTasks => {
    if (onlyRemainingTasks) {
      return (
        <div className="show-hidden">
          <i className="fas fa-eye" />
          <span>Montrer les tâches effectuées</span>
        </div>
      );
    } else {
      return (
        <div className="hide-done">
          <i className="fas fa-eye-slash" />
          <span>Cacher les tâche effectuées</span>
        </div>
      );
    }
  };

  return (
    <div className="button">
      {" "}
      <button className={name} onClick={clickHide}>
        {renderButton(onlyRemainingTasks)}
      </button>
    </div>
  );
};

export default ButtonVisibleTodos;
