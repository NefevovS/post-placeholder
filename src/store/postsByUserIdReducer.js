import {
  FETCH_POSTS_BY_USER_ID_FAILED,
  FETCH_POSTS_BY_USER_ID_PENDING,
  FETCH_POSTS_BY_USER_ID_SUCCEEDED
} from "./actionConst";


export const postsByUserIdReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POSTS_BY_USER_ID_PENDING:
      return {
        userId: action.payload.id,
        loading: true,
        error: null,
        posts: null,
      };

    case FETCH_POSTS_BY_USER_ID_SUCCEEDED:
      return {
        userId: action.payload.id,
        loading: false,
        error: null,
        posts: action.payload.data,
      };

    case FETCH_POSTS_BY_USER_ID_FAILED:
      return {
        userId: action.payload.id,
        loading: false,
        error: action.payload.error,
        posts: null,
      };

    default:
      return state;
  }
};
