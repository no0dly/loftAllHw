import { fork } from "redux-saga/effects";
import { fetchUserWatch } from "./users";
// import {fetchUserReposWatch} from './repos';
import { fetchFollowersWatch } from "./followers";
import { authFlow } from "./auth";
import { fetchLoginWatch } from "./login";

export default function*() {
  yield fork(authFlow);
  yield fork(fetchUserWatch);
  // yield fork(fetchUserReposWatch);
  yield fork(fetchFollowersWatch);
  yield fork(fetchLoginWatch);
}
