import { takeEvery, call, put } from "redux-saga/effects";
import emitter from "../../common/emitter";
import {
  GET_LIST_STAFF,
  GET_LIST_STAFF_SUCCESS,
  GET_LIST_STAFF_FAIL
} from "./types";
import { getAllStaff } from "../../services/accounts";

export default function*() {
  yield takeEvery(GET_LIST_STAFF, function*(action) {
    try {
      const res = yield call(getAllStaff);
      yield put({ type: GET_LIST_STAFF_SUCCESS, payload: res.data });
    } catch (errors) {
      emitter.emit(GET_LIST_STAFF_FAIL, errors);
    }
  });
}
