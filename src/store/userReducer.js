import {
  FETCH_USER_BY_ID_FAILED,
  FETCH_USER_BY_ID_PENDING,
  FETCH_USER_BY_ID_SUCCEEDED,
} from "./actionConst";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_BY_ID_PENDING:
      return {
        userId: action.payload.id,
        loading: true,
        error: null,
        user: null,
      };

    case FETCH_USER_BY_ID_SUCCEEDED:
      return {
        userId: action.payload.id,
        loading: false,
        error: null,
        user: action.payload.data,
      };

    case FETCH_USER_BY_ID_FAILED:
      return {
        userId: action.payload.id,
        loading: false,
        error: action.payload.error,
        user: null,
      };

    default:
      return state;
  }
};
