import { combineReducers } from "redux";
import users from "./users";
import login from "./login";
import followers from "./followers";
import auth from "./auth";

export default combineReducers({ auth, login, followers, users });
