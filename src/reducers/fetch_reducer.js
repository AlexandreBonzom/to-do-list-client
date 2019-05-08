import { FETCH_TODOS } from "../actions/fetch_todos";

export const fetchTodosReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return action.todos;

    default:
      return state;
  }
};
