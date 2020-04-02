import { all } from "redux-saga/effects";
import { watchFetchUsers } from "./usersSaga";

/**
 * Root saga manages watcher lifecycle
 * Export all sagas as root saga
 */
export default function* rootSaga() {
  yield all([watchFetchUsers()]);
}
