import { takeEvery, call } from "redux-saga/effects";
import emitter from "../../common/emitter";
import {
  ADD_SERVICE,
  ADD_SERVICE_SUCCESS,
  ADD_SERVICE_FAIL
} from "./types";
import { createBeautyService } from "../../services/beautySalon";

export default function*() {
  yield takeEvery(ADD_SERVICE, function*(action) {
    try {
      yield call(createBeautyService, action.payload);
      emitter.emit(ADD_SERVICE_SUCCESS);
    } catch (errors) {
      emitter.emit(ADD_SERVICE_FAIL, errors);
    }
  });
}
