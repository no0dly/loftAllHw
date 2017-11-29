import { createAction, createActions } from "redux-actions";
export const setToken = createAction("SET_TOKEN");

export const { authorize } = createActions("AUTHORIZE");
export const { logout } = createActions("LOGOUT");
