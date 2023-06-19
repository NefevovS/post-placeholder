import { all } from "redux-saga/effects";
import {changePageWatcher} from "./changePageSaga";
import {fetchCommentsSagaWatcher} from "./fetchCommentsSaga";


export function* rootSaga() {
    yield all([changePageWatcher(),fetchCommentsSagaWatcher()])

}