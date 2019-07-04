import { combineReducers } from "redux";
import { userLogin } from "./userLogin/reducers";
import { connectRouter } from "connected-react-router";

const reducers = history =>
  combineReducers({ userLogin, router: connectRouter(history) });

export default reducers;
