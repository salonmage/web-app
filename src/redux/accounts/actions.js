import { CREATE_ACCOUNT } from "./types";

export function createAccount(payload) {
  return {
    type: CREATE_ACCOUNT,
    payload
  };
}
