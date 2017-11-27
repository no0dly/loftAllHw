import { combineReducers } from "redux";
import { handleAction } from "redux-actions";
import { setToken } from "../actions/auth";

const token = handleAction(setToken, (state, action) => action.payload, null);

export default combineReducers({ token });

export const getToken = state => state.auth.token;
