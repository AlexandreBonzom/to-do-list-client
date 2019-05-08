import { combineReducers } from "redux";

import { fetchTodosReducer } from "./fetch_reducer";

const rootReducers = combineReducers({
  todos: fetchTodosReducer
});

export default rootReducers;
