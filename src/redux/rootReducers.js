import { combineReducers } from "redux";
import { userLogin } from "./userLogin/reducers";
import { staffs } from "./staffs/reducers";

const reducers = combineReducers({ userLogin, staffs });

export default reducers;
