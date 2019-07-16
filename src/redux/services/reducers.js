import { GET_LIST_SERVICE_SUCCESS } from "./types";
import produce from "immer";

export const services = (state = [], action) => {
  const nextState = produce(state, draftState => {
    if (action.type === GET_LIST_SERVICE_SUCCESS) {
      draftState = action.payload;
    }
    return draftState;
  });
  return nextState;
};
