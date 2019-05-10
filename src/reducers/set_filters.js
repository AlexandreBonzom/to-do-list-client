import {
  SET_REMAINING_TASK_FILTER,
  SET_SEARCH_FILTER
} from "../actions/set_filters";

export const setFiltersReducer = (
  state = { onlyRemainingTasks: false, search: "" },
  action
) => {
  switch (action.type) {
    case SET_SEARCH_FILTER:
      return { ...state, search: action.search };
    case SET_REMAINING_TASK_FILTER:
      return {
        ...state,
        onlyRemainingTasks: !state.onlyRemainingTasks
      };
    default:
      return state;
  }
};
