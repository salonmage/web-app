import { GET_LIST_COMBO_SERVICE_SUCCESS } from "./types";
import produce from "immer";

export const comboServices = (state = [], action) => {
  const nextState = produce(state, draftState => {
    if (action.type === GET_LIST_COMBO_SERVICE_SUCCESS) {
      draftState = action.payload;
    }
    return draftState;
  });
  return nextState;
};
