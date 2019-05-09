import React from "react";

const SearchBar = ({ search, handleInputChange }) => {
  return (
    <div className="search-bar">
      {" "}
      <i className="fas fa-search" />
      <input
        type="text"
        name="search"
        value={search}
        onChange={handleInputChange}
        placeholder={"Search a task "}
      />
    </div>
  );
};

export default SearchBar;
