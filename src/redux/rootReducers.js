import { combineReducers } from "redux";
import { userLogin } from "./userLogin/reducers";
import { staffs } from "./staffs/reducers";
import { comboServices } from "./comboServices/reducers";
import { services } from "./services/reducers";
import { users } from "./users/reducers";
import { user } from "./user/reducers";

const reducers = combineReducers({
  userLogin,
  staffs,
  comboServices,
  services,
  users,
  user
});

export default reducers;
