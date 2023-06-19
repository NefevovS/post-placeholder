import { PostService } from "../API/PostService";
import {
  changePage,
  fetchPostByPage,
  fetchPostByPageFailed,
  fetchPostByPageSucceeded,
  setPostCount,
} from "../store/actionCreators";
import { ASYNC_CHANGE_PAGE } from "../store/actionConst";
import { put, takeEvery, call } from "redux-saga/effects";

function* fetchPostByPageSaga({ payload: { page } }) {
  yield put(fetchPostByPage());
  const { response, error } = yield call(PostService.getPosts, page);
  if (response) {
    yield put(fetchPostByPageSucceeded(response.data));
    const postCount = Number(response.headers["x-total-count"]);
    yield put(setPostCount(postCount));
    yield put(changePage(page));
  } else yield put(fetchPostByPageFailed(error));
}
export function* changePageWatcher() {
  yield takeEvery(ASYNC_CHANGE_PAGE, fetchPostByPageSaga);
}
