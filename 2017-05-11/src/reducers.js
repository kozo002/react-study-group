import { combineReducers } from "redux";

import {
  ADD_ITEM,
  DELETE_ITEM,
} from "./constants";

function items(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return state.concat([action.text]);

    case DELETE_ITEM:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];

    default:
      return state;
  }
}

const reducers = combineReducers({
  items
});

export default reducers;
