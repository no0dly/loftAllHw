import { takeLatest } from "redux-saga/effects";

import { setToken } from "../actions/auth";
import { setTokenToApi } from "../api";

function setTokenSaga(action) {
  setTokenToApi(action.payload);
}

export function* setTokenWatch() {
  yield takeLatest(setToken, setTokenSaga);
}
