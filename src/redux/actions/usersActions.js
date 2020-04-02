import { types } from "../types/usersTypes";

export const fetchUsersRequest = payload => ({
  type: types.USERS.REQUEST,
  payload
});

export const fetchUsersSuccess = payload => ({
  type: types.USERS.SUCCESS,
  payload
});

export const fetchUsersFailure = error => ({
  type: types.USERS.FAILURE,
  error
});
