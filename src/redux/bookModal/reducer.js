import { BOOK_MODAL_SHOW, BOOK_MODAL_CLOSE } from "./types";

const initialState = {
  item: null,
  active: false,
};

export default function bookModalReducer(state = initialState, action) {
  switch (action.type) {
    case BOOK_MODAL_SHOW:
      const { item } = action.payload;
      return { ...state, item, active: true };
    case BOOK_MODAL_CLOSE:
      return initialState;
    default:
      return state;
  }
}
