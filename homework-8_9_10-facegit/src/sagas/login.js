// import {
//   call,
//   put,
//   select,
//   takeLatest
// } from "redux-saga/effects";
// import { request } from "./api";
// import {
//   fetchLoginRequest,
//   fetchLoginSuccess,
//   fetchLoginFailure
// } from "actions/login";
// import { getLoginUser } from "./api";

// function* setLogin() {
//   const login = yield call(getLoginUser);
//   try {
//     const fetchLogin = yield put(fetchLoginSuccess(login));
//   } catch (error) {
//     const loginError = yield put(fetchLoginFailure(error));
//   }
// }

// export function* setLoginwatch() {
//   yield takeLatest(fetchLoginRequest, setLogin);
// }
