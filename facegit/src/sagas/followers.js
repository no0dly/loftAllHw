import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure,
  clearFollowersData
} from "../actions/followers";

import { getUserFollowers } from "../api";

function* fetchFollowersRequestSaga(action) {
  try {
    const followers = yield call(getUserFollowers, action.payload);
    yield put(clearFollowersData());
    yield put(fetchFollowersSuccess(followers.data));
  } catch (error) {
    yield put(fetchFollowersFailure(error));
  }
}

export function* fetchFollowersWatch() {
  yield takeLatest(fetchFollowersRequest, fetchFollowersRequestSaga);
}
