import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleWare from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension"
import {postWatcher} from "../saga/rootSaga";
import {postReducer} from "./postReducer";
import {pageAndLimitReducer} from "./pageAndLimitReducer";

const rootReducer=combineReducers({posts:postReducer,pageAndLimit:pageAndLimitReducer})
const configureStore=()=>{
    const sagaMiddleware = createSagaMiddleWare()
    return {...createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware))),
            runSaga:sagaMiddleware.run(postWatcher)}


}
export const store =configureStore();