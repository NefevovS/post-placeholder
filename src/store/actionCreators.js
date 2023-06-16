import {ASYNC_FETCH_POSTS, SET_POSTS} from "./actionConst";

export const setPost=payload=>({type:SET_POSTS,payload})
export const asyncFetchPosts=()=>({type:ASYNC_FETCH_POSTS})