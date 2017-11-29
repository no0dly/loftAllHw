import { combineReducers } from "redux";
import users from "./users.js";
import followers from "./followers";
import auth from "./auth";
import login from "./login";

export default combineReducers({
  auth,
  login,
  followers,
  users
});
