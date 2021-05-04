import { SEARCH_FIELD_CHANGE } from "./types";

const initialState = {
  name: "",
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_FIELD_CHANGE:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    default:
      return state;
  }
}
