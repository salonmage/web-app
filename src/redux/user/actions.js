import { GET_USER } from "./types";

export function getUser(userId) {
  return {
    type: GET_USER,
    userId
  };
}
