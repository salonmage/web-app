import { LOGIN, LOGOUT } from "./types";
import produce from "immer";

export const userLogin = (state = null, action) => {
  const nextState = produce(state, draftState => {
    if (action.type === LOGIN) draftState = action.payload;
    if (action.type === LOGOUT) draftState = action.payload;
    return draftState;
  });
  return nextState;
};
