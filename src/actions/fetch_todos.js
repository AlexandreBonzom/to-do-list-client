import axios from "axios";

export const FETCH_TODOS = "FETCH_TODOS";

export const todos = data => {
  return {
    type: FETCH_TODOS,
    todos: data
  };
};

export const fetchAllTodos = () => {
  return dispatch => {
    return axios
      .get(`https://to-do-list-server-exercice.herokuapp.com/`)
      .then(
        response => dispatch(todos(response.data.tasks)),
        error => console.log("An error occurred.", error)
      );
  };
};
