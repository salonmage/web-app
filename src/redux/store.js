import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./rootReducers";
import rootSagas from "./rootSagas";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};

const persistedState = loadState();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  persistedState,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas);

store.subscribe(() => {
  saveState({
    userLogin: store.getState().userLogin
  });
});

export default store;
