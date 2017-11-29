import {
  call,
  put,
  select,
  takeLatest
} from "redux-saga/effects";
import { getUserInformation } from "../api";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from "actions/users";
import { getToken } from "reducers/auth";
import { getLogin } from "reducers/login";
function* setUserData(action) {
  const token = yield select(getToken);
  const login = yield select(getLogin);
  try {
    const result = yield call(
      getUserInformation,
      "dolinskaya"
    );
    const getUserData = yield put(fetchUserSuccess(result));
  } catch (error) {
    const error = yield put(fetchUserFailure(error));
  }
}
export function* setUserDatawatch() {
  yield takeLatest(fetchUserRequest, setUserData);
}
