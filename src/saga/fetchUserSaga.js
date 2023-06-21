import { PostService } from "../API/PostService";
import { put, takeEvery, call } from "redux-saga/effects";
import {
    fetchUserByIdFailed,
    fetchUserByIdSucceeded
} from "../store/actionCreators";
import {FETCH_USER_BY_ID_PENDING} from "../store/actionConst";

const delay=(ms)=>new Promise((res)=>setTimeout(res,ms))

function* fetchUserSaga({ payload: { id } }) {
    yield delay(500)
    const { response, error } = yield call(PostService.getUserById, id);
    if (response) {
        yield put(fetchUserByIdSucceeded(response.data,id));
    } else yield put(fetchUserByIdFailed(error,id));

}
export function* fetchUserSagaWatcher() {
    yield takeEvery(FETCH_USER_BY_ID_PENDING, fetchUserSaga);
}
