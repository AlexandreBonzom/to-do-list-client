import React, { Component } from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        {" "}
        <i className="fas fa-search" />
        <input
          type="text"
          value={this.props.search}
          onChange={this.props.onchange}
          placeholder={"Search a task "}
        />
      </div>
    );
  }
}

export default SearchBar;
