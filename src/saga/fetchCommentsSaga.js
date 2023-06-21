import { PostService } from "../API/PostService";
import { put, takeEvery, call } from "redux-saga/effects";
import {
  ASYNC_FETCH_COMMENTS_BY_POST_ID,
} from "../store/actionConst";
import {
  fetchCommentsByIdFailed, fetchCommentsByIdPending,
  fetchCommentsByIdSucceeded,
} from "../store/actionCreators";
import {delay} from "./constDelay";


function* fetchCommentsSaga({ payload: { id } }) {
  yield put(fetchCommentsByIdPending(id))
  yield delay(500)
  const { response, error } = yield call(PostService.getCommentsByPostId, id);
  if (response) {
    yield put(fetchCommentsByIdSucceeded(response.data,id));
  } else yield put(fetchCommentsByIdFailed(error,id));

}
export function* fetchCommentsSagaWatcher() {
  yield takeEvery(ASYNC_FETCH_COMMENTS_BY_POST_ID, fetchCommentsSaga);
}
