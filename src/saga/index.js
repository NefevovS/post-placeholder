import { all } from "redux-saga/effects";
import {changePageWatcher} from "./changePageSaga";


export function* rootSaga() {
    yield all([changePageWatcher()])

}