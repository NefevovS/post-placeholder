import { PostService } from "../API/PostService";
import { setPost, setPostCount } from "../store/actionCreators";
import { put, takeEvery, call, fork } from "redux-saga/effects";
import { ASYNC_CHANGE_PAGE, ASYNC_FETCH_POSTS } from "../store/actionConst";

function* postWorker() {
  const responce = yield call(PostService.getPosts);
  yield put(setPost(responce.data));
  const postCount = Number(responce.headers["x-total-count"]);
  yield put(setPostCount(postCount));
}

function* postWatcher() {
  yield takeEvery(ASYNC_FETCH_POSTS, postWorker);
}

function* changePage({ payload: { page } }) {
  const responce = yield call(PostService.getPosts, page);
  yield put(setPost(responce.data));
  yield put(changePage(page));
}
function* changePageWatcher() {
  yield takeEvery(ASYNC_CHANGE_PAGE, changePage);
}
export function* rootSaga() {
  yield fork(changePageWatcher);
  yield fork(postWatcher);
}