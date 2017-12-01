import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchUserDataRequest,
  fetchUserDataSuccess,
  fetchUserDataFailure
} from "../actions/users";

import { fetchFollowersRequest } from "../actions/followers";

import { getUserInformation } from "../api";

export function* fetchUserDataRequestSaga(action) {
  try {
    const user = yield call(getUserInformation, action.payload);
    yield put(fetchUserDataSuccess(user.data));
    yield put(fetchFollowersRequest(action.payload));
  } catch (error) {
    yield put(fetchUserDataFailure(error));
  }
}

export function* fetchUserWatch() {
  yield takeLatest(fetchUserDataRequest, fetchUserDataRequestSaga);
}
