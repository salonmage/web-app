import { all } from "redux-saga/effects";
import userLoginSagas from "./userLogin/sagas";
import staffsSagas from "./staffs/sagas";
import servicesSagas from "./services/sagas";
import comboServicesSagas from "./comboServices/sagas";
import usersSagas from "./users/sagas";
import userSagas from "./user/sagas";
import accountSagas from "./accounts/sagas";

export default function* rootSaga() {
  yield all([
    userLoginSagas(),
    staffsSagas(),
    servicesSagas(),
    comboServicesSagas(),
    usersSagas(),
    userSagas(),
    accountSagas()
  ]);
}
