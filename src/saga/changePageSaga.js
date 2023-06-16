import {PostService} from "../API/PostService";
import {changePage, setPost} from "../store/actionCreators";
import {ASYNC_CHANGE_PAGE} from "../store/actionConst";
import { put, takeEvery, call } from "redux-saga/effects";


function* asyncChangePage({ payload:{page} }) {
    const responce = yield call(PostService.getPosts, page);
    yield put(setPost(responce.data));
    console.log(page)
    yield put(changePage(page));
}
export function* changePageWatcher() {
    yield takeEvery(ASYNC_CHANGE_PAGE, asyncChangePage);
}
