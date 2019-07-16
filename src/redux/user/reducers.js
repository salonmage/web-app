import { GET_USER_SUCCESS } from "./types";
import produce from "immer";

export const user = (state = [], action) => {
  const nextState = produce(state, draftState => {
    if (action.type === GET_USER_SUCCESS) {
      draftState = action.payload;
    }
    return draftState;
  });
  return nextState;
};
