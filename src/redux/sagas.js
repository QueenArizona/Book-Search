import { put, spawn, debounce, call, takeLatest } from "redux-saga/effects";
import { SEARCH_FIELD_CHANGE } from "./search/types";
import { BOOK_LIST_REQUEST } from "./bookList/types";
import {
  bookListRequest,
  bookListSuccess,
  bookListFailure,
} from "./bookList/actions";
import { bookListFetch } from "./utils/api";

function filterSearchFieldAction({ type, payload }) {
  return type === SEARCH_FIELD_CHANGE && payload.value.trim() !== "";
}

function* handleSearchFieldSaga(action) {
  yield put(bookListRequest(action.payload.value));
}

function* watchSearchFieldSaga() {
  yield debounce(1000, filterSearchFieldAction, handleSearchFieldSaga);
}

function* handleBookSearchSaga(action) {
  try {
    const data = yield call(bookListFetch, action.payload.search);
    yield put(bookListSuccess(data.docs));
  } catch (e) {
    yield put(bookListFailure(e.message));
  }
}

function* watchBookSearchSaga() {
  yield takeLatest(BOOK_LIST_REQUEST, handleBookSearchSaga);
}

export default function* saga() {
  yield spawn(watchSearchFieldSaga);
  yield spawn(watchBookSearchSaga);
}
