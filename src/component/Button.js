import React from "react";

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

export default Button;
