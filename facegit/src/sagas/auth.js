import { authorize, logout, setToken } from "../actions/auth";
import { fetchLoginRequest, fetchLoginSuccess } from "../actions/login";
import { take, put, call, select } from "redux-saga/effects";
import { setTokenApi, clearTokenApi } from "../api";
import { getIsAuthorized } from "../reducers/auth";

import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage,
  getLoginFromLocalStorage,
  setLoginToLocalStorage,
  removeLoginFromLocalStorage
} from "../localStorage";

export function* authFlow() {
  while (true) {
    const isAuthorized = yield select(getIsAuthorized);
    const localStorageToken = yield call(getTokenFromLocalStorage);
    const localStorageLogin = yield call(getLoginFromLocalStorage);
    let token, login;
    if (!isAuthorized) {
      if (localStorageToken) {
        token = localStorageToken;
        login = localStorageLogin;
        yield put(authorize());
        yield put(fetchLoginSuccess(login));
      } else {
        const action = yield take(authorize);
        token = action.payload;

        yield put(fetchLoginRequest(token));
        const getLogin = yield take(fetchLoginSuccess);
        login = getLogin.payload;
      }
    }

    yield call(setTokenApi, token);
    yield call(setTokenToLocalStorage, token);
    yield call(setLoginToLocalStorage, login);
    yield put(setToken(token));
    yield take(logout);
    yield call(removeTokenFromLocalStorage);
    yield call(removeLoginFromLocalStorage);
    yield call(clearTokenApi);
  }
}
