import { PostService } from "../API/PostService";
import { put, takeEvery, call } from "redux-saga/effects";
import {
  ASYNC_FETCH_COMMENTS_BY_POST_ID,
} from "../store/actionConst";
import {
  fetchCommentsByIdFailed, fetchCommentsByIdPending,
  fetchCommentsByIdSucceeded,
} from "../store/actionCreators";
const delay=(ms)=>new Promise((res)=>setTimeout(res,ms))

function* fetchCommentsSaga({ payload: { id } }) {
  yield put(fetchCommentsByIdPending(id))
  yield delay(2000)
  const { response, error } = yield call(PostService.getCommentsByPostId, id);
  if (response) {
    yield put(fetchCommentsByIdSucceeded(response.data,id));
  } else yield put(fetchCommentsByIdFailed(error,id));

}
export function* fetchCommentsSagaWatcher() {
  yield takeEvery(ASYNC_FETCH_COMMENTS_BY_POST_ID, fetchCommentsSaga);
}
