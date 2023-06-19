import {
    FETCH_COMMENTS_BY_POST_ID,
    FETCH_COMMENTS_BY_POST_ID_FAILED,
    FETCH_COMMENTS_BY_POST_ID_SUCCEEDED
} from "./actionConst";



export const commentsReducer = (state=[], action) => {

    switch (action.type) {

        case FETCH_COMMENTS_BY_POST_ID_SUCCEEDED:
            return [...state,{loading:false,visible:true,error:null,comments:action.payload,postId:action.payload[0].postId}]
        case FETCH_COMMENTS_BY_POST_ID_FAILED:
            return [...state,{ loading: false, error: action.payload} ];

        default:
            return state;
    }
};