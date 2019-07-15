import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import emitter from "../../common/emitter";
import { login, refreshToken } from "../../services/auth";
import { getMyInfo } from "../../services/accounts";
import {
  LOGIN,
  UPDATE_USER_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  UPDATE_USER_LOGIN_SUCCESS,
  UPDATE_USER_LOGIN_FAIL,
  REFRESH_TOKEN,
  REFRESH_TOKEN_FAIL,
  REFRESH_TOKEN_SUCCESS
} from "./types";
import store from "../store";

export default function*() {
  yield takeEvery(LOGIN, function*(action) {
    try {
      const res = yield call(login, action.payload);
      yield put({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (errors) {
      emitter.emit(LOGIN_FAIL, errors);
    }
  });

  yield takeEvery(UPDATE_USER_LOGIN, function*(action) {
    try {
      const res = yield call(getMyInfo);
      yield put({ type: UPDATE_USER_LOGIN_SUCCESS, payload: res.data });
    } catch (errors) {
      emitter.emit(UPDATE_USER_LOGIN_FAIL, errors);
    }
  });

  yield takeLatest(REFRESH_TOKEN, function*(action) {
    try {
      const userLogin = store.getState().userLogin;
      const payload = {
        access_token: userLogin.access_token,
        refresh_token: userLogin.refresh_token
      };
      const res = yield call(refreshToken, payload);
      yield put({ type: REFRESH_TOKEN_SUCCESS, payload: res.data });
    } catch (errors) {
      emitter.emit(REFRESH_TOKEN_FAIL, errors);
    }
  });
}
