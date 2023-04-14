import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducers";

export function configureStore() {
  let store = createStore(reducer, applyMiddleware(thunk, logger));

  return store;
}
