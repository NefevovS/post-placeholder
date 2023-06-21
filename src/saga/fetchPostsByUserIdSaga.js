import { PostService } from "../API/PostService";
import { put, takeEvery, call } from "redux-saga/effects";
import { delay } from "./constDelay";
import {
  fetchPostsByUserIdFailed,
  fetchPostsByUserIdSucceeded,
} from "../store/actionCreators";
import { FETCH_POSTS_BY_USER_ID_PENDING } from "../store/actionConst";

function* fetchPostsByUserIdSaga({ payload: { id } }) {
  yield delay(500);
  const { response, error } = yield call(PostService.getPostsByUserId, id);
  if (response) {
    yield put(fetchPostsByUserIdSucceeded(response.data, id));
  } else yield put(fetchPostsByUserIdFailed(error, id));
}
export function* fetchPostByUserWatcher() {
  yield takeEvery(FETCH_POSTS_BY_USER_ID_PENDING, fetchPostsByUserIdSaga);
}
