import { all } from "redux-saga/effects";
import getListUser from "./userLogin/sagas";

export default function* rootSaga() {
  yield all([getListUser()]);
}
