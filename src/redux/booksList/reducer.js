import {
  BOOKS_LIST_FAILURE,
  BOOKS_LIST_REQUEST,
  BOOKS_LIST_SUCCESS,
  SELECT_PAGE,
} from "./types";

const initialState = {
  items: [],
  loading: false,
  error: null,
  page: 0,
};

export default function booksListReducer(state = initialState, action) {
  switch (action.type) {
    case BOOKS_LIST_REQUEST:
      return { ...state, items: [], loading: true, error: null, page: 0 };
    case BOOKS_LIST_FAILURE:
      const { error } = action.payload;
      return { ...state, items: [], loading: false, error, page: 0 };
    case BOOKS_LIST_SUCCESS:
      const { items } = action.payload;
      return { ...state, items, loading: false, error: null, page: 1 };
    case SELECT_PAGE:
      const { page } = action.payload;
      return { ...state, page };
    default:
      return state;
  }
}
