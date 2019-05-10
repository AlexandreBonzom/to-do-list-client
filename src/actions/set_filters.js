export const SET_REMAINING_TASK_FILTER = "SET_REMAINING_TASK_FILTER";
export const SET_SEARCH_FILTER = "SET_SEARCH_FILTER";

export const remainingTaskFilter = () => {
  return { type: SET_REMAINING_TASK_FILTER };
};

export const searchFilter = search => {
  return { type: SET_SEARCH_FILTER, search };
};
