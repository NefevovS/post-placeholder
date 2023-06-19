import {
  FETCH_POST_BY_PAGE,
  FETCH_POST_BY_PAGE_FAILED,
  FETCH_POST_BY_PAGE_SUCCEEDED,
} from "./actionConst";

const defaultPosts = {
  loading: false,
  error: {},
  posts: [],
};

export const postReducer = (state = defaultPosts, action) => {
  switch (action.type) {
    case FETCH_POST_BY_PAGE:
      return { ...state, loading: true };
    case FETCH_POST_BY_PAGE_SUCCEEDED:
      return { ...state, loading: false, posts: action.payload };
    case FETCH_POST_BY_PAGE_FAILED:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};