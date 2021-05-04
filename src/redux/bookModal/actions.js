import { BOOK_MODAL_SHOW, BOOK_MODAL_CLOSE } from "./types";

export function bookModalShow(item) {
  return { type: BOOK_MODAL_SHOW, payload: { item } };
}

export function bookModalClose() {
  return { type: BOOK_MODAL_CLOSE };
}
