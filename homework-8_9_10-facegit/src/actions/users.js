import { createActions } from "redux-actions";

export const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} = createActions({
  FETCH_USER_REQUEST: undefined,
  FETCH_USER_SUCCESS: undefined,
  FETCH_USER_FAILURE: undefined
});
