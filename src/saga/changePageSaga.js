import {PostService} from "../API/PostService";
import {changePage, setPost, setPostCount} from "../store/actionCreators";
import {ASYNC_CHANGE_PAGE} from "../store/actionConst";
import { put, takeEvery, call } from "redux-saga/effects";


function* asyncChangePage({ payload:{page} }) {
    const responce = yield call(PostService.getPosts, page);
    const postCount = Number(responce.headers["x-total-count"]);
    yield put(setPostCount(postCount));
    yield put(changePage(page));
    yield put(setPost(responce.data));
}
export function* changePageWatcher() {
    yield takeEvery(ASYNC_CHANGE_PAGE, asyncChangePage);
}
