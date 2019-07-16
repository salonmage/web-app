import { takeEvery, call, put } from "redux-saga/effects";
import emitter from "../../common/emitter";
import {
  ADD_SERVICE,
  ADD_SERVICE_SUCCESS,
  ADD_SERVICE_FAIL,
  GET_LIST_SERVICE,
  GET_LIST_SERVICE_SUCCESS,
  GET_LIST_SERVICE_FAIL
} from "./types";
import {
  createBeautyService,
  getListBeautyService
} from "../../services/beautySalon";

export default function*() {
  yield takeEvery(ADD_SERVICE, function*(action) {
    try {
      yield call(createBeautyService, action.payload);
      emitter.emit(ADD_SERVICE_SUCCESS);
    } catch (errors) {
      emitter.emit(ADD_SERVICE_FAIL, errors);
    }
  });

  yield takeEvery(GET_LIST_SERVICE, function*(action) {
    try {
      const res = yield call(getListBeautyService);
      yield put({ type: GET_LIST_SERVICE_SUCCESS, payload: res.data.data });
    } catch (errors) {
      emitter.emit(GET_LIST_SERVICE_FAIL, errors);
    }
  });
}
