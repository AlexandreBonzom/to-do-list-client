import React from "react";
import { searchFilter } from "../actions/set_filters";

import { connect } from "react-redux";

const SearchBar = props => {
  const handleChange = event => {
    props.setSearchFilter(event.target.value);
  };

  return (
    <div className="search-bar">
      {" "}
      <i className="fas fa-search" />
      <input
        type="text"
        value={props.searchFilter}
        onChange={handleChange}
        placeholder={"Search a task "}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { searchFilter: state.setFilters.search };
};
const mapsDispatchFilterToProps = dispatch => {
  return { setSearchFilter: search => dispatch(searchFilter(search)) };
};

const SearchBarContainer = connect(
  mapStateToProps,
  mapsDispatchFilterToProps
)(SearchBar);

export default SearchBarContainer;
