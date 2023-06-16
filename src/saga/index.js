import { all } from "redux-saga/effects";
import { postWatcher} from "./postSaga";
import {changePageWatcher} from "./changePageSaga";


export function* rootSaga() {
    yield all([postWatcher(),changePageWatcher()])

}