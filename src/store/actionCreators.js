import {
    ASYNC_CHANGE_PAGE,
    CHANGE_PAGE,
    FETCH_COMMENTS_BY_POST_ID, FETCH_COMMENTS_BY_POST_ID_FAILED,
    FETCH_COMMENTS_BY_POST_ID_SUCCEEDED,
    FETCH_POST_BY_PAGE,
    FETCH_POST_BY_PAGE_FAILED,
    FETCH_POST_BY_PAGE_SUCCEEDED, RESET_SEARCH_QUERY,
    SET_POSTS_COUNT, SET_SEARCH_QUERY, SET_SORT_VALUE,
} from "./actionConst";



export const fetchPostByPage=(page)=>({type:FETCH_POST_BY_PAGE,payload:{page}})
export const fetchPostByPageSucceeded=(data)=>({type:FETCH_POST_BY_PAGE_SUCCEEDED,payload: data})
export const fetchPostByPageFailed=(error)=>({type:FETCH_POST_BY_PAGE_FAILED,payload: error})

export const fetchCommentsById=(id)=>({type:FETCH_COMMENTS_BY_POST_ID,payload:{id}})
export const fetchCommentsByIdSucceeded=(data)=>({type:FETCH_COMMENTS_BY_POST_ID_SUCCEEDED,payload:data})
export const fetchCommentsByIdFailed=(error)=>({type:FETCH_COMMENTS_BY_POST_ID_FAILED,payload:error})

export const changePage=(payload)=>({type:CHANGE_PAGE,payload})
export const asyncChangePage=(payload)=>({type:ASYNC_CHANGE_PAGE,payload})
export const setPostCount=(payload)=>({type:SET_POSTS_COUNT,payload})

export const setSearchQuery=(payload)=>({type:SET_SEARCH_QUERY,payload})
export const setSortValue=(payload)=>({type:SET_SORT_VALUE,payload})
export const resetSearchQuery=()=>({type:RESET_SEARCH_QUERY})