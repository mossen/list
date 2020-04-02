import { call, put, takeLatest } from "redux-saga/effects";
import api from "../services/api";
import { types } from "../redux/types/usersTypes";
import {
  fetchUsersSuccess,
  fetchUsersFailure
} from "../redux/actions/usersActions";
import { USERS_ENDPOINT } from "../constants/endpoints";

function* fetchUsers(action) {
  try {
    const response = yield call(api, USERS_ENDPOINT, "GET", action.payload);
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error));
  }
}

export function* watchFetchUsers() {
  yield takeLatest(types.USERS.REQUEST, fetchUsers);
}
