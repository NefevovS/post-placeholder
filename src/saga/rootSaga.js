import {PostService} from "../API/PostService";
import {setPost} from "../store/actionCreators";
import {put,takeEvery,call} from "redux-saga/effects"
import {ASYNC_FETCH_POSTS} from "../store/actionConst";

function* postWorker(){
    const data=yield call(PostService.getPosts)
    yield put(setPost(data))
}
export function* postWatcher(){
    yield takeEvery(ASYNC_FETCH_POSTS,postWorker)
}