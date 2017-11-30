import { handleActions } from "redux-actions";
import { fetchLoginSuccess } from "../actions/login";

export default handleActions(
  {
    [fetchLoginSuccess]: (state, action) => action.payload
  },
  null
);

export const getLogin = state => state.login;
