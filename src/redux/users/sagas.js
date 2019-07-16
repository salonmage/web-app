import { takeEvery, call, put } from "redux-saga/effects";
import emitter from "../../common/emitter";
import {
  GET_LIST_USER_SUCCESS,
  GET_LIST_USER_FAIL,
  GET_LIST_USER,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL
} from "./types";
import { getListUser, createUser } from "../../services/user";

function formatData(data) {
  data.map(user => {
    user.attributes.map(attribute => {
      if (attribute.text) user[attribute.key] = attribute.text;
      if (attribute.list) user[attribute.key] = attribute.list;
    });
  });
  return data;
}

export default function*() {
  yield takeEvery(GET_LIST_USER, function*(action) {
    try {
      const res = yield call(getListUser);
      const payload = formatData(res.data.users);
      yield put({ type: GET_LIST_USER_SUCCESS, payload });
    } catch (errors) {
      emitter.emit(GET_LIST_USER_FAIL, errors);
    }
  });

  yield takeEvery(ADD_USER, function*(action) {
    try {
      yield call(createUser, action.payload);
      emitter.emit(ADD_USER_SUCCESS);
    } catch (errors) {
      emitter.emit(ADD_USER_FAIL, errors);
    }
  });
}
