import { combineReducers } from "redux";
import { userLogin } from "./userLogin/reducers";
import { staffs } from "./staffs/reducers";
import { comboServices } from "./comboServices/reducers";

const reducers = combineReducers({
  userLogin,
  staffs,
  comboServices
});

export default reducers;
