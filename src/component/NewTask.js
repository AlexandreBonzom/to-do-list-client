import React from "react";
import PropTypes from "prop-types";

const NewTask = ({ value, handleInputChange }) => {
  return (
    <div className="newTask">
      <input
        type="text"
        value={value}
        name="newTask"
        placeholder="Entrez une nouvelle tâche"
        onChange={handleInputChange}
      />
    </div>
  );
};

NewTask.propTypes = {
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default NewTask;
