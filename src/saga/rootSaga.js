import {PostService} from "../API/PostService";
import {setPost, setPostCount} from "../store/actionCreators";
import {put,takeEvery,call} from "redux-saga/effects"
import {ASYNC_CHANGE_PAGE, ASYNC_FETCH_POSTS} from "../store/actionConst";

function* postWorker(){
    const responce=yield call(PostService.getPosts)
    yield put(setPost(responce.data))
    const postCount = Number(responce.headers["x-total-count"])
    yield put(setPostCount(postCount))
}
function* changePage({payload:{page}}){
    const responce=yield call(PostService.getPosts,page);
    yield put(setPost(responce.data))

}

export function* postWatcher(){
    yield takeEvery(ASYNC_FETCH_POSTS,postWorker)
    yield takeEvery(ASYNC_CHANGE_PAGE,changePage)
}