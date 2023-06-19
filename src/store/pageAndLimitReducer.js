import { CHANGE_PAGE, SET_POSTS_COUNT } from "./actionConst";

const defaultPageAndLimit = { page: 1, limit: 10, postCount: 0 };

export const pageAndLimitReducer = (state = defaultPageAndLimit, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return { ...state, page: action.payload };
    case SET_POSTS_COUNT:
      return { ...state, postCount: action.payload };

    default:
      return state;
  }
};