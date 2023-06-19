import { PostService } from "../API/PostService";
import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_COMMENTS_BY_POST_ID } from "../store/actionConst";
import {
  fetchCommentsById,
  fetchCommentsByIdFailed,
  fetchCommentsByIdSucceeded,
} from "../store/actionCreators";

function* fetchCommentsSaga({ payload: { id } }) {
  const { response, error } = yield call(PostService.getCommentsByPostId, id);
  if (response) {
    yield put(fetchCommentsByIdSucceeded(response.data));
  } else yield put(fetchCommentsByIdFailed(error));
  // const { response, error } = yield call(PostService.getPosts, page);
  // if (response) {
  //     yield put(fetchPostByPageSucceeded(response.data));
  //     const postCount = Number(response.headers["x-total-count"]);
  //     yield put(setPostCount(postCount));
  //     yield put(changePage(page));
  // } else yield put(fetchPostByPageFailed(error));
}
export function* fetchCommentsSagaWatcher() {
  yield takeEvery(FETCH_COMMENTS_BY_POST_ID, fetchCommentsSaga);
}
