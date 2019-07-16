import { takeEvery, call, put } from "redux-saga/effects";
import emitter from "../../common/emitter";
import {
  GET_LIST_COMBO_SERVICE,
  GET_LIST_COMBO_SERVICE_SUCCESS,
  GET_LIST_COMBO_SERVICE_FAIL,
  ADD_COMBO_SERVICE,
  ADD_COMBO_SERVICE_SUCCESS,
  ADD_COMBO_SERVICE_FAIL
} from "./types";
import { getListComboBeautyService } from "../../services/beautySalon";

export default function*() {
  yield takeEvery(GET_LIST_COMBO_SERVICE, function*(action) {
    try {
      const res = yield call(getListComboBeautyService);
      yield put({ type: GET_LIST_COMBO_SERVICE_SUCCESS, payload: res.data.data });
    } catch (errors) {
      emitter.emit(GET_LIST_COMBO_SERVICE_FAIL, errors);
    }
  });

  yield takeEvery(ADD_COMBO_SERVICE, function*(action) {
    try {
      yield call(getListComboBeautyService);
      emitter.emit(ADD_COMBO_SERVICE_SUCCESS);
    } catch (errors) {
      emitter.emit(ADD_COMBO_SERVICE_FAIL, errors);
    }
  });
}
