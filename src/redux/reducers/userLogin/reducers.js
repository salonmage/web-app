import { LOGIN, LOGOUT } from "./types";

export const userLogin = (state = null, action) => {
  if (action.type === LOGIN) return action.payload;
  if (action.type === LOGOUT) return action.payload;
  return state;
};
