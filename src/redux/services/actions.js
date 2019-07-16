import { GET_LIST_SERVICE, ADD_SERVICE } from "./types";

export function getListService() {
  return {
    type: GET_LIST_SERVICE
  };
}

export function addService(payload) {
  return {
    type: ADD_SERVICE,
    payload
  };
}
