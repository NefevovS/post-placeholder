import {
  FETCH_POST_BY_PAGE_FAILED,
  FETCH_POST_BY_PAGE_PENDING,
  FETCH_POST_BY_PAGE_SUCCEEDED,
} from "./actionConst";

const defaultPosts = {
  loading: false,
  error: null,
  posts: [],
};

export const postReducer = (state = defaultPosts, action) => {
  switch (action.type) {
    case FETCH_POST_BY_PAGE_PENDING:
      return { ...state, loading: true };
    case FETCH_POST_BY_PAGE_SUCCEEDED:
      return { error:null, loading: false, posts: action.payload };
    case FETCH_POST_BY_PAGE_FAILED:
      return { posts: [], loading: false, error: action.payload };

    default:
      return state;
  }
};
