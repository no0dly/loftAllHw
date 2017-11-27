import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from "../actions/followers";

import { getUserFollowers } from "../api";

function* fetchFollowersRequestSaga(action) {
  try {
    const followers = yield call(getUserFollowers, action.payload);
    yield put(fetchFollowersSuccess(followers));
  } catch (error) {
    yield put(fetchFollowersFailure(error));
  }
}

export function* fetchFollowersWatch() {
  yield takeLatest(fetchFollowersRequest, fetchFollowersRequestSaga);
}
