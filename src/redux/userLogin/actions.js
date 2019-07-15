import { LOGIN, LOGOUT, UPDATE_USER_LOGIN, REFRESH_TOKEN } from "./types";

export function actionLogin(data) {
  return {
    type: LOGIN,
    payload: data
  };
}

export function actionLogout() {
  return {
    type: LOGOUT
  };
}

export function updateUserLogin() {
  return {
    type: UPDATE_USER_LOGIN
  };
}

export function refreshToken() {
  return {
    type: REFRESH_TOKEN
  };
}
