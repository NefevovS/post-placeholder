import { all } from "redux-saga/effects";
import {changePageWatcher} from "./changePageSaga";
import {fetchCommentsSagaWatcher} from "./fetchCommentsSaga";
import {fetchUserSagaWatcher} from "./fetchUserSaga";


export function* rootSaga() {
    yield all([changePageWatcher(),fetchCommentsSagaWatcher(),fetchUserSagaWatcher()])

}