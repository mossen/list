import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import Sagas from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const enhancers = [];

if (
  process.env.NODE_ENV === "development" ||
  process.env.NODE_ENV === "production"
) {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(sagaMiddleware),
  ...enhancers
);

const store = createStore(reducer, {}, composedEnhancers);

sagaMiddleware.run(Sagas);

export default store;
