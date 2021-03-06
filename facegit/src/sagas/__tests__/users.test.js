import {
  fetchUserDataSuccess,
  fetchUserDataFailure
} from "../../actions/users";
import { call, put } from "redux-saga/effects";
import { fetchUserDataRequestSaga } from "../users";
import { getUserInformation } from "../../api";

describe("Saga users:", () => {
  const action = {
    payload: "test_login"
  };
  const user = {
    data: {
      login: "test",
      id: "1"
    }
  };
  const saga = fetchUserDataRequestSaga(action);
  it("call getUserInformation", () => {
    expect(saga.next().value).toEqual(call(getUserInformation, "test_login"));
  });
  it("dispatch action fetchUserDataSuccess with user from call on success call", () => {
    expect(saga.next(user).value).toEqual(put(fetchUserDataSuccess(user.data)));
  });

  it("dispatch action fetchUserDataFailure with user from call on success call", () => {
    const error = new Error("test error");
    const saga = fetchUserDataRequestSaga(action);
    saga.next();
    expect(saga.throw(error).value).toEqual(put(fetchUserDataFailure(error)));
  });
});
