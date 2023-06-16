import {SET_POSTS} from "./actionConst";

const defaultState=[]


export const postReducer=(state=defaultState,action)=>{
    switch (action.type){
        case SET_POSTS: return {...state,...action.payload};
        default: return  state
    }
}