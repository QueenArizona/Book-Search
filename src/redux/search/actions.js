import { SEARCH_FIELD_CHANGE } from "./types";

export function searchFieldChange(name, value) {
  return { type: SEARCH_FIELD_CHANGE, payload: { name, value } };
}
