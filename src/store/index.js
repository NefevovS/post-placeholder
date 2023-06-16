import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleWare from "redux-saga";
import {composeWithDevTools} from "redux-devtools-extension"
import {postReducer} from "./postReducer";
import {pageAndLimitReducer} from "./pageAndLimitReducer";
import {rootSaga} from "../saga";

const rootReducer=combineReducers({posts:postReducer,pageAndLimit:pageAndLimitReducer})
const configureStore=()=>{
    const sagaMiddleware = createSagaMiddleWare()
    return {...createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware))),
            runSaga:sagaMiddleware.run(rootSaga)}


}
export const store =configureStore();