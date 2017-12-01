import { createActions } from "redux-actions";

export const {
  fetchUserDataRequest,
  fetchUserDataSuccess,
  fetchUserDataFailure
} = createActions({
  FETCH_USER_DATA_REQUEST: undefined,
  FETCH_USER_DATA_SUCCESS: undefined,
  FETCH_USER_DATA_FAILURE: undefined
});
