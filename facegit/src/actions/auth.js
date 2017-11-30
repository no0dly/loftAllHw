import { createActions } from "redux-actions";

export const { setToken, authorize, logout } = createActions({
  SET_TOKEN: undefined,
  AUTHORIZE: undefined,
  LOGOUT: undefined
});
