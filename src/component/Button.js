import React from "react";

const Button = ({ name, onclick, label }) => {
  return (
    <div className="button">
      {" "}
      <button className={name} onClick={onclick}>
        {label}
      </button>
    </div>
  );
};

export default Button;
