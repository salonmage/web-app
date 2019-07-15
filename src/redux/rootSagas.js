import { all } from "redux-saga/effects";
import getListUser from "./userLogin/sagas";
import getListStaff from "./staffs/sagas";

export default function* rootSaga() {
  yield all([getListUser(), getListStaff()]);
}
