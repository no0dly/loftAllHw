import { handleAction, handleActions } from "redux-actions";
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from "actions/followers";
import { combineReducers } from "redux";

const ids = handleAction(
  fetchFollowersSuccess,
  (state, action) => action.payload,
  []
);
const error = handleAction(
  fetchFollowersFailure,
  (state, action) => action.payload,
  null
);
const isFetched = handleActions(
  {
    [fetchFollowersRequest]: () => false,
    [fetchFollowersSuccess]: () => true,
    [fetchFollowersFailure]: () => false
  },
  false
);
const isFetching = handleActions(
  {
    [fetchFollowersRequest]: () => true,
    [fetchFollowersSuccess]: () => false,
    [fetchFollowersFailure]: () => false
  },
  false
);
export default combineReducers({
  ids,
  error,
  isFetched,
  isFetching
});
export const getFollowersIds = state => state.followers.ids;
export const getFollowersError = state =>
  state.followers.error;
export const getFollowersFetched = state =>
  state.followers.isFetched;
export const getFollowersFetching = state =>
  state.followers.isFetching;
