import React from "react";
import PropTypes from "prop-types";

const Button = ({ name, addTodo, label }) => {
  return (
    <div className="button">
      {" "}
      <button className={name} onClick={addTodo}>
        {label}
      </button>
    </div>
  );
};
Button.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  addTodo: PropTypes.func.isRequired
};

export default Button;
