import { takeEvery, call, put } from "redux-saga/effects";
import emitter from "../../common/emitter";
import { GET_USER, GET_USER_FAIL, GET_USER_SUCCESS } from "./types";
import { userInfo } from "../../services/user";

function formatData(data) {
  data.attributes.map(attribute => {
    if (attribute.text) data[attribute.key] = attribute.text;
    if (attribute.list) data[attribute.key] = attribute.list;
    return false;
  });
  return data;
}

export default function*() {
  yield takeEvery(GET_USER, function*(action) {
    try {
      const res = yield call(userInfo, action.userId);
      const payload = formatData(res.data);
      yield put({ type: GET_USER_SUCCESS, payload });
    } catch (errors) {
      emitter.emit(GET_USER_FAIL, errors);
    }
  });
}
