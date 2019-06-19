import { LOGIN, LOGOUT } from "./types";

export function actionLogin(userLogin) {
  return {
    type: LOGIN,
    payload: userLogin
  }
}

export function actionLogout() {
  return {
    type: LOGOUT,
    payload: null
  }
}