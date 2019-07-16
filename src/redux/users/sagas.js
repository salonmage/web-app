import { takeEvery, call, put } from "redux-saga/effects";
import emitter from "../../common/emitter";
import {
  GET_LIST_USER_SUCCESS,
  GET_LIST_USER_FAIL,
  GET_LIST_USER
} from "./types";
import { getListUser } from "../../services/user";

export default function*() {
  yield takeEvery(GET_LIST_USER, function*(action) {
    try {
      const res = yield call(getListUser);
      yield put({ type: GET_LIST_USER_SUCCESS, payload: res.data.users });
    } catch (errors) {
      emitter.emit(GET_LIST_USER_FAIL, errors);
    }
  });
}
