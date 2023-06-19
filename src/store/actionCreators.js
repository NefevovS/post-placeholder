import {
    ASYNC_CHANGE_PAGE,
    CHANGE_PAGE, FETCH_POST_BY_PAGE, FETCH_POST_BY_PAGE_FAILED,
    FETCH_POST_BY_PAGE_SUCCEEDED,
    SET_POSTS_COUNT
} from "./actionConst";



export const fetchPostByPage=(page)=>({type:FETCH_POST_BY_PAGE,payload:{page}})
export const fetchPostByPageSucceeded=(data)=>({type:FETCH_POST_BY_PAGE_SUCCEEDED,payload: data})
export const fetchPostByPageFailed=(error)=>({type:FETCH_POST_BY_PAGE_FAILED,payload: error})





export const changePage=(payload)=>({type:CHANGE_PAGE,payload})
export const asyncChangePage=(payload)=>({type:ASYNC_CHANGE_PAGE,payload})
export const setPostCount=(payload)=>({type:SET_POSTS_COUNT,payload})