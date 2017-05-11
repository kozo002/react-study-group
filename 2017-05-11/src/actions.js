import {
  ADD_ITEM,
  DELETE_ITEM,
} from "./constants";

export function addItem(text) {
  return {
    type: ADD_ITEM,
    text
  };
}

export function deleteItem(index) {
  return {
    type: DELETE_ITEM,
    index
  };
}
