import { combineReducers } from "redux";
import { hello, helloSaga } from "./hello/reducers";
import { userLogin } from "./userLogin/reducers";

const reducers = combineReducers({ hello, helloSaga,userLogin });

export default reducers;
