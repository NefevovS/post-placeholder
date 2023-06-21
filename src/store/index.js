import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleWare from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { postReducer } from "./postReducer";
import { pageAndLimitReducer } from "./pageAndLimitReducer";
import { rootSaga } from "../saga";
import { commentsReducer } from "./commentsReducer";
import {sortAndSearchReducer} from "./sortAndSearchFormReducer";
import {userReducer} from "./userReducer";
import {postsByUserIdReducer} from "./postsByUserIdReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  pageAndLimit: pageAndLimitReducer,
  comments: commentsReducer,
  sortAndSearch:sortAndSearchReducer,
  user:userReducer,
  postsById:postsByUserIdReducer,
});
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleWare();
  return {
    ...createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
    ),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};
export const store = configureStore();