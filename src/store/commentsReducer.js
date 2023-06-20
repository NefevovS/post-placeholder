import {
  FETCH_COMMENTS_BY_POST_ID_FAILED,
  FETCH_COMMENTS_BY_POST_ID_PENDING,
  FETCH_COMMENTS_BY_POST_ID_SUCCEEDED,
} from "./actionConst";

export const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENTS_BY_POST_ID_PENDING:
      return [
        ...state.filter((item) => item.postId !== action.payload.id),
        {
          postId: action.payload.id,
          loading: true,
          error: null,
          comments: null,
        },
      ];

    case FETCH_COMMENTS_BY_POST_ID_SUCCEEDED:
      return [
        ...state.filter((item) => item.postId !== action.payload.id),
        {
          postId: action.payload.id,
          loading: false,
          error: null,
          comments: action.payload.data,
        },
      ];

    case FETCH_COMMENTS_BY_POST_ID_FAILED:
      return [
        ...state.filter((item) => item.postId !== action.payload.id),
        {
          postId: action.payload.id,
          loading: false,
          error: action.payload.data,
          comments: null,
        },
      ];

    default:
      return state;
  }
};
