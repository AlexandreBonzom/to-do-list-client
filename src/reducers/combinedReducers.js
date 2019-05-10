import { combineReducers } from "redux";

import { fetchTodosReducer } from "./fetch_reducer";
import { setFiltersReducer } from "./set_filters";
const rootReducers = combineReducers({
  todos: fetchTodosReducer,
  setFilters: setFiltersReducer
});

export default rootReducers;
