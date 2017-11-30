import { combineReducers } from "redux";
import { handleAction, handleActions } from "redux-actions";
import { setToken, authorize, logout } from "../actions/auth";

const token = handleAction(setToken, (state, action) => action.payload, null);
const isAuthorized = handleActions(
  {
    [authorize]: () => true,
    [logout]: () => false
  },
  false
);

export default combineReducers({ token, isAuthorized });

export const getToken = state => state.auth.token;
export const getIsAuthorized = state => state.auth.isAuthorized;
