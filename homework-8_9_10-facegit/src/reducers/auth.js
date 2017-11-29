import { setToken, authorize } from "actions/auth";
import { handleAction, handleActions } from "redux-actions";
import { combineReducers } from "redux";

const token = handleAction(
  authorize,
  (state, action) => action.payload,
  null
);
const IsAuthorized = handleAction(
  authorize,
  (state, action) => true,
  false
);
export default combineReducers({
  token,
  IsAuthorized
});
export const getToken = state => state.auth.token;
export const getIsAuthorized = state =>
  state.auth.IsAuthorized;
