import { takeLatest, put, call } from "redux-saga/effects";
import {
  fetchUserDataRequest,
  fetchUserDataSuccess,
  fetchUserDataFailure
} from "../actions/users";

import { fetchFollowersRequest } from "../actions/followers";

import { getUserInformation } from "../api";

function* fetchUserDataRequestSaga(action) {
  try {
    const user = yield call(getUserInformation, action.payload);
    yield put(fetchUserDataSuccess(user));
    yield put(fetchFollowersRequest(action.payload));
  } catch (error) {
    yield put(fetchUserDataFailure(error));
  }
}

export function* fetchUserWatch() {
  yield takeLatest(fetchUserDataRequest, fetchUserDataRequestSaga);
}
