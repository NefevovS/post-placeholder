import {SET_POSTS} from "./actionConst";

const defaultPosts=[]


export const postReducer=(state=defaultPosts,action)=>{
    switch (action.type){
        case SET_POSTS: return [...state,...action.payload];
        default: return  state
    }
}