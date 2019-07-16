import { GET_LIST_USER_SUCCESS } from "./types";
import produce from "immer";

export const users = (state = [], action) => {
  const nextState = produce(state, draftState => {
    if (action.type === GET_LIST_USER_SUCCESS) {
      draftState = action.payload;
    }
    return draftState;
  });
  return nextState;
};
