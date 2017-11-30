import { takeLatest, call, put } from "redux-saga/effects";

import {
  fetchLoginRequest,
  fetchLoginSuccess,
  fetchLoginFailure
} from "../actions/login";

import { getLogin } from "../api";

const fetchLoginRequestSaga = function*(action) {
  try {
    const login = yield call(getLogin, action.payload);
    yield put(fetchLoginSuccess(login.data.login));
  } catch (error) {
    yield put(fetchLoginFailure(error));
  }
};

export function* fetchLoginWatch() {
  yield takeLatest(fetchLoginRequest, fetchLoginRequestSaga);
}
