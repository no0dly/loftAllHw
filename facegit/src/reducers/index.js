import { combineReducers } from "redux";
import users from "./users";
import followers from "./followers";
import auth from "./auth";

export default combineReducers({ auth, followers, users });
