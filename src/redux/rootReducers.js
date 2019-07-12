import { combineReducers } from "redux";
import { userLogin } from "./userLogin/reducers";

const reducers = combineReducers({ userLogin });

export default reducers;
