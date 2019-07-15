import { GET_LIST_STAFF_SUCCESS } from "./types";
import produce from "immer";

export const staffs = (state = null, action) => {
  const nextState = produce(state, draftState => {
    if (action.type === GET_LIST_STAFF_SUCCESS) {
      draftState = action.payload;
    }
    return draftState;
  });
  return nextState;
};
