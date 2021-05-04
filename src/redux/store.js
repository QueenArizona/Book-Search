import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import bookListReducer from "./bookList/reducer";
import bookModalReducer from "./bookModal/reducer";
import searchReducer from "./search/reducer";
import saga from "./sagas";

const reducer = combineReducers({
  bookList: bookListReducer,
  bookModal: bookModalReducer,
  search: searchReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(saga);

export default store;
