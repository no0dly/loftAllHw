import { handleAction, handleActions } from "redux-actions";
import {
  fetchLoginRequest,
  fetchLoginSuccess,
  fetchLoginFailure
} from "actions/login";

export default handleAction(
  fetchLoginSuccess,
  (state, action) => action.payload.data.login,
  null
);

export const getLogin = state => state.login;
