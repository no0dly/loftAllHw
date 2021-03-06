import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from "../actions/followers";

const isFetching = handleActions(
  {
    [fetchFollowersRequest]: () => true,
    [fetchFollowersSuccess]: () => false,
    [fetchFollowersFailure]: () => false
  },
  false
);
const isFetched = handleActions(
  {
    [fetchFollowersRequest]: () => false,
    [fetchFollowersSuccess]: () => true,
    [fetchFollowersFailure]: () => true
  },
  false
);

const data = handleActions(
  {
    [fetchFollowersSuccess]: (state, action) => action.payload,
    [fetchFollowersRequest]: () => []
  },
  []
);

const error = handleActions(
  {
    [fetchFollowersFailure]: (state, action) => action.payload,
    [fetchFollowersRequest]: () => null,
    [fetchFollowersSuccess]: () => null
  },
  null
);

export default combineReducers({ isFetching, isFetched, error, data });

export const getUserFollowers = state => state.followers.data;
export const getIsFetching = state => state.followers.isFetching;
export const getIsFetched = state => state.followers.isFetched;
export const getError = state => state.followers.error;
