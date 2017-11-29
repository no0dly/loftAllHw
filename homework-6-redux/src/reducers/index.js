
import market from "./market.js";
import farm from "./farm.js";
import budget from "./budget.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  market,
  farm,
  budget
});
export default rootReducer;
