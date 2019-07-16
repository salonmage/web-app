import { combineReducers } from "redux";
import { userLogin } from "./userLogin/reducers";
import { staffs } from "./staffs/reducers";
import { comboServices } from "./comboServices/reducers";
import { services } from "./services/reducers";
import { users } from "./users/reducers";

const reducers = combineReducers({
  userLogin,
  staffs,
  comboServices,
  services,
  users
});

export default reducers;
