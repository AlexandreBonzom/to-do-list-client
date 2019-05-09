import React from "react";

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

export default NewTask;
