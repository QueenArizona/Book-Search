import {
  BOOK_LIST_FAILURE,
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  SELECT_PAGE,
} from "./types";

export function bookListRequest(search) {
  return { type: BOOK_LIST_REQUEST, payload: { search } };
}

export function bookListFailure(error) {
  return { type: BOOK_LIST_FAILURE, payload: { error } };
}

export function bookListSuccess(items) {
  return { type: BOOK_LIST_SUCCESS, payload: { items } };
}

export function selectPage(page) {
  return { type: SELECT_PAGE, payload: { page } };
}
