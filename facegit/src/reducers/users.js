import { combineReducers } from "redux";
import { handleActions } from "redux-actions";
import {
  fetchUserDataRequest,
  fetchUserDataSuccess,
  fetchUserDataFailure
} from "../actions/users";

const isFetching = handleActions(
  {
    [fetchUserDataRequest]: () => true,
    [fetchUserDataSuccess]: () => false,
    [fetchUserDataFailure]: () => false
  },
  false
);
const isFetched = handleActions(
  {
    [fetchUserDataRequest]: () => false,
    [fetchUserDataSuccess]: () => true,
    [fetchUserDataFailure]: () => true
  },
  false
);

const data = handleActions(
  {
    [fetchUserDataSuccess]: (state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [fetchUserDataFailure]: (state, action) => action.payload
  },
  null
);

export default combineReducers({ isFetching, isFetched, error, data });

export const getUserImage = state => state.users.data.avatar_url;
export const getUserName = state => state.users.data.name;
export const getUserNickname = state => state.users.data.login;
export const getUserFollowersCount = state => state.users.data.followers;
export const getUserPubReposCount = state => state.users.data.public_repos;
