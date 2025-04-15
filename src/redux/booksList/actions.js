import {
  BOOKS_LIST_FAILURE,
  BOOKS_LIST_REQUEST,
  BOOKS_LIST_SUCCESS,
  SELECT_PAGE,
} from "./types";

export function booksListRequest(search) {
  return { type: BOOKS_LIST_REQUEST, payload: { search } };
}

export function booksListFailure(error) {
  return { type: BOOKS_LIST_FAILURE, payload: { error } };
}

export function booksListSuccess(items) {
  return { type: BOOKS_LIST_SUCCESS, payload: { items } };
}

export function selectPage(page) {
  return { type: SELECT_PAGE, payload: { page } };
}
