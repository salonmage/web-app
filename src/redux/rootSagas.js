import { all } from "redux-saga/effects";
import userLoginSagas from "./userLogin/sagas";
import staffSagas from "./staffs/sagas";
import serviceSagas from "./services/sagas";
import comboServiceSagas from "./comboServices/sagas";

export default function* rootSaga() {
  yield all([
    userLoginSagas(),
    staffSagas(),
    serviceSagas(),
    comboServiceSagas()
  ]);
}
