import {
  LOGIN_SUCCESS,
  LOGOUT,
  UPDATE_USER_LOGIN_SUCCESS,
  REFRESH_TOKEN_SUCCESS
} from "./types";
import produce from "immer";

export const userLogin = (state = null, action) => {
  const nextState = produce(state, draftState => {
    if (action.type === LOGIN_SUCCESS) {
      draftState = action.payload;
    }
    if (action.type === UPDATE_USER_LOGIN_SUCCESS) {
      draftState.profile = action.payload;
    }
    if (action.type === REFRESH_TOKEN_SUCCESS) {
      draftState.access_token = action.payload.access_token;
      draftState.refresh_token = action.payload.refresh_token;
    }
    if (action.type === LOGOUT) {
      draftState = null;
    }
    return draftState;
  });
  return nextState;
};
