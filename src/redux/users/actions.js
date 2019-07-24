import { GET_LIST_USER, ADD_USER, UPDATE_USER } from "./types";

export function getListUser() {
  return {
    type: GET_LIST_USER
  };
}

export function addUser(payload) {
  return {
    type: ADD_USER,
    payload
  };
}

export function updateUser(userId, payload) {
  return {
    type: UPDATE_USER,
    payload,
    userId
  };
}
