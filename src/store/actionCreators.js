import {
  ASYNC_CHANGE_PAGE, ASYNC_FETCH_COMMENTS_BY_POST_ID,
  CHANGE_PAGE,
  FETCH_COMMENTS_BY_POST_ID_FAILED,
  FETCH_COMMENTS_BY_POST_ID_PENDING,
  FETCH_COMMENTS_BY_POST_ID_SUCCEEDED,
  FETCH_POST_BY_PAGE_FAILED,
  FETCH_POST_BY_PAGE_PENDING,
  FETCH_POST_BY_PAGE_SUCCEEDED, FETCH_USER_BY_ID_FAILED, FETCH_USER_BY_ID_PENDING, FETCH_USER_BY_ID_SUCCEEDED,
  RESET_SEARCH_QUERY,
  SET_POSTS_COUNT,
  SET_SEARCH_QUERY,
  SET_SORT_VALUE,
} from "./actionConst";

export const fetchPostByPagePending = (page) => ({
  type: FETCH_POST_BY_PAGE_PENDING,
  payload: { page },
});
export const fetchPostByPageSucceeded = (data) => ({
  type: FETCH_POST_BY_PAGE_SUCCEEDED,
  payload: data,
});
export const fetchPostByPageFailed = (error) => ({
  type: FETCH_POST_BY_PAGE_FAILED,
  payload: error,
});

export const asyncFetchCommentsByPostId=(id)=>({
  type:ASYNC_FETCH_COMMENTS_BY_POST_ID,
  payload: {id}
})


export const fetchCommentsByIdPending = (id) => ({
  type: FETCH_COMMENTS_BY_POST_ID_PENDING,
  payload: { id },
});
export const fetchCommentsByIdSucceeded = (data,id) => ({
  type: FETCH_COMMENTS_BY_POST_ID_SUCCEEDED,
  payload: {data,id}
});
export const fetchCommentsByIdFailed = (error,id) => ({
  type: FETCH_COMMENTS_BY_POST_ID_FAILED,
  payload: {error,id},
});

export const changePage = (payload) => ({ type: CHANGE_PAGE, payload });
export const asyncChangePage = (payload) => ({
  type: ASYNC_CHANGE_PAGE,
  payload,
});
export const setPostCount = (payload) => ({ type: SET_POSTS_COUNT, payload });

export const setSearchQuery = (payload) => ({
  type: SET_SEARCH_QUERY,
  payload,
});
export const setSortValue = (payload) => ({ type: SET_SORT_VALUE, payload });
export const resetSearchQuery = () => ({ type: RESET_SEARCH_QUERY });


export const fetchUserByIdPending = (id) => ({
  type: FETCH_USER_BY_ID_PENDING,
  payload: { id },
});
export const fetchUserByIdSucceeded = (data,id) => ({
  type: FETCH_USER_BY_ID_SUCCEEDED,
  payload: {data,id}
});
export const fetchUserByIdFailed = (error,id) => ({
  type: FETCH_USER_BY_ID_FAILED,
  payload: {error,id},
});
