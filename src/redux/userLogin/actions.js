import { LOGIN, LOGOUT, UPDATE_USER_LOGIN, REFRESH_TOKEN } from "./types";

export function actionLogin(userLogin) {
  return {
    type: LOGIN,
    payload: userLogin
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
