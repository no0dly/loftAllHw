import { fork } from "redux-saga/effects";
import { setUserDatawatch } from "./users";
import { setFollowersIdswatch } from "./followers";
import { authFlow } from "./auth";
// import { setLoginwatch } from "./login";

export default function*() {
  yield fork(authFlow);
  yield fork(setUserDatawatch);
  yield fork(setFollowersIdswatch);
  // yield fork(setLoginwatch);
}
