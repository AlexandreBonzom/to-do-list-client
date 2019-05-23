import React from "react";
import PropTypes from "prop-types";

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

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default SearchBar;
