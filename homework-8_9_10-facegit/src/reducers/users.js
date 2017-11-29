import { handleAction, handleActions } from "redux-actions";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from "actions/users";
import { combineReducers } from "redux";

const data = handleAction(
  fetchUserSuccess,
  (state, action) => [action.payload],
  []
);
const error = handleAction(
  fetchUserFailure,
  (state, action) => action.payload,
  null
);
const isFetched = handleActions(
  {
    [fetchUserRequest]: () => false,
    [fetchUserSuccess]: () => true,
    [fetchUserFailure]: () => false
  },
  false
);
const isFetching = handleActions(
  {
    [fetchUserRequest]: () => true,
    [fetchUserSuccess]: () => false,
    [fetchUserFailure]: () => false
  },
  false
);
export default combineReducers({
  data,
  error,
  isFetched,
  isFetching
});
export const getUserData = state => state.users.data;
export const getUserError = state => state.users.error;
export const getUserFetched = state =>
  state.users.isFetched;
export const getUserFetching = state =>
  state.users.isFetching;
