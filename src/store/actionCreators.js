import {ASYNC_CHANGE_PAGE, ASYNC_FETCH_POSTS, CHANGE_PAGE, SET_POSTS, SET_POSTS_COUNT} from "./actionConst";

export const setPost=payload=>({type:SET_POSTS,payload})
export const asyncFetchPosts=()=>({type:ASYNC_FETCH_POSTS})
export const changePage=(payload)=>({type:CHANGE_PAGE,payload})
export const asyncChangePage=(page)=>({type:ASYNC_CHANGE_PAGE,page})
export const setPostCount=(payload)=>({type:SET_POSTS_COUNT,payload})