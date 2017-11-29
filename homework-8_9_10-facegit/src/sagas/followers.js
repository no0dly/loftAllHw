import {
  call,
  put,
  select,
  takeLatest
} from "redux-saga/effects";
import {
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure
} from "actions/followers";
import { getToken } from "reducers/auth";
import { getUserFollowers } from "../api";

function* setFollowersIds(action) {
  const token = yield select(getToken);
  try {
    const result = yield call(
      getUserFollowers,
      "dolinskaya"
    );
    const getUserData = yield put(
      fetchFollowersSuccess(result)
    );
  } catch (error) {
    const error = yield put(fetchFollowersFailure(error));
  }
}
export function* setFollowersIdswatch() {
  yield takeLatest(fetchFollowersRequest, setFollowersIds);
}
