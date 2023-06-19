import {
  RESET_SEARCH_QUERY,
  SET_SEARCH_QUERY,
  SET_SORT_VALUE,
} from "./actionConst";

const defaultSortAndSearch = {
  searchQuery: "",
  select: "",
};

export const sortAndSearchReducer = (state = defaultSortAndSearch, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case SET_SORT_VALUE:
      return { ...state, select: action.payload };
    case RESET_SEARCH_QUERY:
      return { ...state, searchQuery: "" };
    default:
      return state;
  }
};
