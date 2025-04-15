import { put, spawn, debounce, call, takeLatest } from "redux-saga/effects";
import { SEARCH_FIELD_CHANGE } from "./search/types";
import { BOOKS_LIST_REQUEST } from "./booksList/types";
import {
  booksListRequest,
  booksListSuccess,
  booksListFailure,
} from "./booksList/actions";
import { booksListFetch } from "./utils/api";

function filterSearchFieldAction({ type, payload }) {
  return type === SEARCH_FIELD_CHANGE && payload.value.trim() !== "";
}

function* handleSearchFieldSaga(action) {
  yield put(booksListRequest(action.payload.value));
}

function* watchSearchFieldSaga() {
  yield debounce(1000, filterSearchFieldAction, handleSearchFieldSaga);
}

function* handleBookSearchSaga(action) {
  try {
    const data = yield call(booksListFetch, action.payload.search);
    yield put(booksListSuccess(data.docs));
  } catch (e) {
    yield put(booksListFailure(e.message));
  }
}

function* watchBookSearchSaga() {
  yield takeLatest(BOOKS_LIST_REQUEST, handleBookSearchSaga);
}

export default function* saga() {
  yield spawn(watchSearchFieldSaga);
  yield spawn(watchBookSearchSaga);
}
