import { takeEvery, call } from "redux-saga/effects";
import emitter from "../../common/emitter";
import {
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_FAIL,
  CREATE_ACCOUNT_SUCCESS
} from "./types";
import { createAccount } from "../../services/accounts";

export default function*() {
  yield takeEvery(CREATE_ACCOUNT, function*(action) {
    try {
      const res = yield call(createAccount, action.payload);
      emitter.emit(CREATE_ACCOUNT_SUCCESS, res);
    } catch (errors) {
      emitter.emit(CREATE_ACCOUNT_FAIL, errors);
    }
  });
}
