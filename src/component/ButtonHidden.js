import React from "react";
import PropTypes from "prop-types";

const ButtonHidden = ({ name, clickHide, onlyRemainingTasks }) => {
  const renderButton = onlyRemainingTasks => {
    return onlyRemainingTasks ? (
      <div className="show-hidden">
        <i className="fas fa-eye" />
        <span>Montrer les tâches effectuées</span>
      </div>
    ) : (
      <div className="hide-done">
        <i className="fas fa-eye-slash" />
        <span>Cacher les tâches effectuées</span>
      </div>
    );
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

ButtonHidden.propTypes = {
  name: PropTypes.string,
  clickHide: PropTypes.func.isRequired,
  onlyRemainingTasks: PropTypes.bool.isRequired
};

export default ButtonHidden;
