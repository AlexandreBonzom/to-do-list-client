import React, { Component } from "react";

import "./App.css";
import SearchBar from "./component/SearchBar";
import NewTask from "./component/NewTask";
import Header from "./component/Header";
import List from "./component/List";

import { fetchAllTodos } from "./actions/fetch_todos";

import { connect } from "react-redux";

class App extends Component {
  componentDidMount = async () => {
    this.props.updateTodos();
  };

  render() {
    return (
      <div className="page">
        <div className="container">
          <Header />
          <SearchBar />

          <List />
          <NewTask />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { todos: state.todos, searchFilter: state.setFilters.search };
};
const mapsDispatchtoProps = dispatch => {
  return { updateTodos: () => dispatch(fetchAllTodos()) };
};

App = connect(
  mapStateToProps,
  mapsDispatchtoProps
)(App);

export default App;
